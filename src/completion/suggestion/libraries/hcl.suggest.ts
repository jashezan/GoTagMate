import type * as vscode from "vscode";
import { fetchHCLKeywords } from "../../../tags/hcl.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";

export const getHCLCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const hclSuggestions = (fetchHCLKeywords?.tag_list ?? []).map(
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
		addFieldSuggestions(hclSuggestions, fieldName, "hcl", [
			"snake_case",
			"camelCase",
		]);
	}

	return hclSuggestions;
};
