import type * as vscode from "vscode";
import { fetchGormKeywords } from "../../../tags/gorm.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";

/**
 * The function `getGormCompletionItems` returns an array of completion items based on fetched Gorm
 * keywords.
 * @returns An array of `vscode.CompletionItem` objects is being returned. Each object in the array is
 * created using the `createCompletionItem` function with properties such as `label`, `detail`,
 * `insertText`, `trigger`, and `documentation` based on the values from the
 * `fetchGormKeywords.tag_list` array.
 */
export const getGormCompletionItems = (): vscode.CompletionItem[] => {
	return (fetchGormKeywords?.tag_list ?? []).map((tag: ITagList) =>
		createCompletionItem(
			tag.tag_name ?? "",
			tag.tag_description ?? "", // Detail text for hover
			tag.tag_name ?? "",
			false, // No re-trigger here
			tag.tag_usage ?? [], // Documentation from tags.ts
		),
	);
};
