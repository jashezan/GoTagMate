import type * as vscode from "vscode";

import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";
import { fetchYAMLKeywords } from "../../../tags/yaml.tag";

/**
 * The function `getXMLCompletionItems` returns completion items for XML based on YAML keywords and
 * field name suggestions.
 * @param document - The `document` parameter in the `getXMLCompletionItems` function represents the
 * text document in which the completion items are being requested. It contains information about the
 * text content, language, and other properties of the document being edited.
 * @param position - The `position` parameter in the `getXMLCompletionItems` function represents the
 * position in the text document where code completion is being triggered. It is a `vscode.Position`
 * object that contains information about the line and character position in the document where the
 * completion is requested. This information is used to
 * @returns The function `getXMLCompletionItems` returns an array of `vscode.CompletionItem` objects,
 * which are completion suggestions for XML content based on YAML keywords and field name suggestions.
 */
export const getYAMLCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const yamlSuggestions = (fetchYAMLKeywords?.tag_list ?? []).map(
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
		addFieldSuggestions(yamlSuggestions, fieldName, "yaml", [
			"snake_case",
			"camelCase",
			"SCREAMING_SNAKE_CASE",
			"Train_Case",
			"PascalCase",
		]);
	}

	return yamlSuggestions;
};