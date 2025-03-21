import type * as vscode from "vscode";
import { fetchDynamoDBAVKeywords } from "../../../tags/dynamodb.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";

export const getDynamoDBCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const dynamodbavSuggestions = (fetchDynamoDBAVKeywords?.tag_list ?? []).map(
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
		addFieldSuggestions(dynamodbavSuggestions, fieldName, "dynamodbav", [
			"snake_case",
			"camelCase",
		]);
	}

	return dynamodbavSuggestions;
};
