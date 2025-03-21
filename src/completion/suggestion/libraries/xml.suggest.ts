import type * as vscode from "vscode";
import { fetchXMLKeywords } from "../../../tags/xml.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";

/**
 * The function `getXMLCompletionItems` generates completion items for XML based on fetched XML
 * keywords and field name suggestions.
 * @param document - The `document` parameter in the `getXMLCompletionItems` function represents the
 * text document in which the completion items are being requested. It contains the content and
 * metadata of the document, such as the text, language, and version.
 * @param position - The `position` parameter in the `getXMLCompletionItems` function represents the
 * position in the text document where code completion is being triggered. It is a `vscode.Position`
 * object that contains the line and character position within the document where the completion is
 * requested. This information is used to provide context
 * @returns The function `getXMLCompletionItems` returns an array of `vscode.CompletionItem` objects,
 * which are suggestions for XML code completion. The suggestions include XML tag names and
 * descriptions fetched from a list of XML keywords. Additionally, if a field name is detected in the
 * document at the specified position, suggestions for different casing conventions (snake_case,
 * camelCase, PascalCase) are added to the
 */
export const getXMLCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const xmlSuggestions = (fetchXMLKeywords?.tag_list ?? []).map(
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
		addFieldSuggestions(xmlSuggestions, fieldName, "xml", [
			"snake_case",
			"camelCase",
			"PascalCase"
		]);
	}

	return xmlSuggestions;
};