import type * as vscode from "vscode";
import { fetchMsgpackKeywords } from "../../../tags/msgpack.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";

/**
 * The function `getJsonCompletionItems` returns completion items for JSON based on fetched keywords
 * and field name suggestions.
 * @param document - The `document` parameter in the `getJsonCompletionItems` function represents the
 * text document in which the completion items are being requested. It contains the content and
 * metadata of the document, such as the text, language, and other properties related to the document
 * being edited.
 * @param position - The `position` parameter in the `getJsonCompletionItems` function represents the
 * position in the text document where code completion is being requested. It is of type
 * `vscode.Position` and specifies the line and character position within the document where the
 * completion is triggered. This information is used to provide context
 * @returns The function `getJsonCompletionItems` returns an array of `vscode.CompletionItem` objects,
 * which are completion suggestions for JSON keywords and field names. The function first generates
 * completion items for JSON keywords based on a list of tags fetched from a JSON file. It then adds a
 * top suggestion for a field name in snake_case format based on the current document and position.
 * Finally, it returns the
 */
export const getMsgPackCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const msgPackSuggestions = (fetchMsgpackKeywords?.tag_list ?? []).map(
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
		addFieldSuggestions(msgPackSuggestions, fieldName, "msgpack", [
			"snake_case",
			"camelCase",
		]);
	}

	return msgPackSuggestions;
};
