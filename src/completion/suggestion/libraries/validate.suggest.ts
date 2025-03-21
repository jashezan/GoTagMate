import type * as vscode from "vscode";
import type { ITagList } from "../../../tags/tag.type";
import { fetchValidateKeywords } from "../../../tags/validate.tag";
import { createCompletionItem } from "../../../utils/completion_item.util";

/**
 * The function `getValidateCompletionItems` returns an array of completion items based on the
 * `tag_list` fetched from `fetchValidateKeywords`, with each item containing information about a tag.
 * @returns An array of `vscode.CompletionItem` objects is being returned.
 */
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
