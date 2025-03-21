import type * as vscode from "vscode";
import { fetchEnvKeywords } from "../../../tags/env.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";

/**
 * The function `getEnvCompletionItems` retrieves completion items for environment variables based on
 * fetched keywords and field name suggestions.
 * @param document - The `document` parameter in the `getEnvCompletionItems` function refers to the
 * vscode TextDocument object, which represents the text content of the document being edited. It
 * contains information about the text, such as the content, language, and version.
 * @param position - The `position` parameter in the `getEnvCompletionItems` function represents the
 * position in the text document where code completion is being triggered. It is a `vscode.Position`
 * object that contains information about the line and character position in the document where the
 * completion is requested. This information is used to
 * @returns The `getEnvCompletionItems` function returns an array of `vscode.CompletionItem` objects,
 * which are suggestions for code completion related to environment variables. The suggestions include
 * environment variable names, descriptions, usage information, and field names in snake_case format.
 */
export const getEnvCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const envSuggestions = (fetchEnvKeywords.tag_list ?? []).map(
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
		addFieldSuggestions(envSuggestions, fieldName, "env", [
			"SCREAMING_SNAKE_CASE"
		]);
	}

	return envSuggestions;
};
