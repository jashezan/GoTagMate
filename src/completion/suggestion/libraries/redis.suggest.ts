import type * as vscode from "vscode";
import { fetchRedisKeywords } from "../../../tags/redis.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";

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
