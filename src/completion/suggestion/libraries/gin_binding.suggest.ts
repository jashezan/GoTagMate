import type * as vscode from "vscode";
import { FetchGinBindingKeywords } from "../../../tags/gin_binding.tag";
import type { ITagList } from "../../../tags/tag.type";
import { createCompletionItem } from "../../../utils/completion_item.util";

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
