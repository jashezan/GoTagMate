import type * as vscode from "vscode";
import { FetchGinBindingKeywords } from "../../../tags/gin_binding.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";

/**
 * The function `getGinBindingCompletionItems` returns an array of completion items based on the tag
 * list fetched from `FetchGinBindingKeywords`.
 * @returns An array of `vscode.CompletionItem` objects is being returned. Each object represents a
 * completion item with properties such as `tag_name`, `tag_description`, `tag_usage`, and a boolean
 * value indicating whether the item is deprecated.
 */
export const getGinBindingCompletionItems = (): vscode.CompletionItem[] => {
	return (FetchGinBindingKeywords.tag_list ?? []).map((tag: ITagList) =>
		createCompletionItem(
			tag.tag_name ?? "",
			tag.tag_description ?? "",
			tag.tag_name ?? "",
			false,
			tag.tag_usage ?? [],
		),
	);
};
