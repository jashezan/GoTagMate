import type * as vscode from "vscode";
import { fetchRedisKeywords } from "../../../tags/redis.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";

/**
 * The function `getRedisCompletionItems` retrieves completion items for Redis keywords based on the
 * provided document and position.
 * @param document - The `document` parameter in the `getRedisCompletionItems` function refers to the
 * current text document in the editor where code completion is being triggered. It contains
 * information about the content of the document, such as the text, language, and other metadata.
 * @param position - The `position` parameter in the `getRedisCompletionItems` function represents the
 * position in the text document where code completion is being triggered. This is typically the
 * location where the user is typing and expects suggestions for auto-completion.
 * @returns The function `getRedisCompletionItems` returns an array of `vscode.CompletionItem` objects,
 * which are completion suggestions for Redis keywords based on the provided
 * `fetchRedisKeywords.tag_list` data and additional field name suggestions based on the document and
 * position.
 */
export const getRedisCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const redisSuggestions = (fetchRedisKeywords.tag_list ?? []).map(
		(tag: ITagList) =>
			createCompletionItem(
				tag.tag_name ?? "",
				tag.tag_description ?? "",
				tag.tag_name ?? "",
				true,
				tag.tag_usage ?? "",
			),
	);

	// Add snake_case field name as top suggestion
	const fieldName = getFieldName(document, position);
	if (fieldName) {
		addFieldSuggestions(redisSuggestions, fieldName, "json", [
			"snake_case",
			"camelCase",
		]);
	}

	return redisSuggestions;
};
