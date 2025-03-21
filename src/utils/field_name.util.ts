import type * as vscode from "vscode";

/**
 * The function `getFieldName` extracts the name of a field from a line of text document.
 * @param document - The `document` parameter is of type `vscode.TextDocument`, which represents the
 * text content of a document in the VS Code editor.
 * @param position - The `position` parameter in the `getFieldName` function refers to the position
 * within the text document where you want to extract the field name. It is of type `vscode.Position`,
 * which represents a specific line and character position within the text document.
 * @returns The `getFieldName` function returns a string value representing the field name extracted
 * from the line of text at the specified position in the given `document`. If a match is found using
 * the regular expression pattern `(\w+)\s+\w+`, the captured group 1 (the field name) is returned. If
 * no match is found, it returns `undefined`.
 */
export const getFieldName = (
	document: vscode.TextDocument,
	position: vscode.Position,
): string | undefined => {
	try {
		const lineText = document.lineAt(position).text;
		const fieldMatch = lineText.match(/(\w+)\s+\w+/);
		return fieldMatch ? fieldMatch[1] : undefined;
	} catch (error) {
		return undefined;
	}
};
