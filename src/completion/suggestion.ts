import type * as vscode from "vscode";
import type { ITagList } from "../tags";
import {
	fetchGormKeywords,
	fetchJSONKeywords,
	fetchValidateKeywords,
} from "../tags";
import { createCompletionItem } from "../utils/completion_item.util";
import { getFieldName } from "../utils/field_name.util";
import { toSnakeCase } from "../utils/snake_case.util";

export const getLibrarySuggestions = (): vscode.CompletionItem[] => {
	return [
		createCompletionItem(
			"json",
			"JSON tags for struct fields", // Detail text for hover
			'json:"$1"', // Insert with cursor inside quotes
			true, // Re-trigger suggestions
			['json:"field_name"'], // Documentation example
		),
		createCompletionItem(
			"gorm",
			"GORM tags for database fields",
			'gorm:"$1"',
			true,
			['gorm:"column:name"'],
		),
		createCompletionItem(
			"validate",
			"Validation tags for struct fields",
			'validate:"$1"',
			true,
			['validate:"required"'],
		),
	];
};

export const getTagSpecificSuggestions = (
	tagType: string,
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	switch (tagType) {
		case "gorm":
			return getGormCompletionItems();
		case "validate":
			return getValidateCompletionItems();
		case "json":
			return getJsonCompletionItems(document, position);
		default:
			return [];
	}
};

export const getGormCompletionItems = (): vscode.CompletionItem[] => {
	return (fetchGormKeywords?.tag_list ?? []).map((tag: ITagList) =>
		createCompletionItem(
			tag.tag_name ?? "",
			tag.tag_description ?? "", // Detail text for hover
			tag.tag_name ?? "",
			false, // No re-trigger here
			tag.tag_usage ?? [], // Documentation from tags.ts
		),
	);
};

export const getValidateCompletionItems = (): vscode.CompletionItem[] => {
	return (fetchValidateKeywords.tag_list ?? []).map((tag: ITagList) =>
		createCompletionItem(
			tag.tag_name ?? "",
			tag.tag_description ?? "",
			tag.tag_name ?? "",
			false,
			tag.tag_usage ?? [],
		),
	);
};

export const getJsonCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const jsonSuggestions = (fetchJSONKeywords.tag_list ?? []).map(
		(tag: ITagList) =>
			createCompletionItem(
				tag.tag_name ?? "",
				tag.tag_description ?? "",
				tag.tag_name ?? "",
				false,
				tag.tag_usage ?? "",
			),
	);

	// Add snake_case field name as top suggestion
	const fieldName = getFieldName(document, position);
	if (fieldName) {
		const snakeCaseField = toSnakeCase(fieldName);
		jsonSuggestions.unshift(
			createCompletionItem(
				snakeCaseField,
				`JSON key for field "${fieldName}"`, // Detail text
				snakeCaseField,
				false,
				[`json:"${snakeCaseField}"`], // Documentation example
			),
		);
	}

	return jsonSuggestions;
};
