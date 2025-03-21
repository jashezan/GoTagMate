import type * as vscode from "vscode";
import { createCompletionItem } from "../../../utils/completion_item.util";
import { getFieldName } from "../../../utils/field_name.util";
import { addFieldSuggestions } from "../../case_completion.provider";

/**
 * The function `getFormCompletionItems` in TypeScript provides completion suggestions for form field
 * names based on the current position in the document.
 * @param document - The `document` parameter in the `getFormCompletionItems` function refers to the
 * text document in which the code completion is being triggered. It contains the content of the
 * document where the completion is requested.
 * @param position - The `position` parameter in the `getFormCompletionItems` function represents the
 * position in the text document where code completion is being triggered. It is a `vscode.Position`
 * object that contains the line and character position within the document where the completion is
 * requested.
 * @returns An array of `vscode.CompletionItem` objects representing form completion suggestions.
 */
export const getFormCompletionItems = (
	document: vscode.TextDocument,
	position: vscode.Position,
): vscode.CompletionItem[] => {
	const formSuggestions: vscode.CompletionItem[] = [];

	// Add snake_case field name as top suggestion
	const fieldName = getFieldName(document, position);
	if (fieldName) {
		addFieldSuggestions(formSuggestions, fieldName, "form", [
			"snake_case",
			"camelCase",
			"PascalCase",
		]);
	}

	return formSuggestions;
};
