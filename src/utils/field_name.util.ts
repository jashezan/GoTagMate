import type * as vscode from "vscode";

export const getFieldName = (
	document: vscode.TextDocument,
	position: vscode.Position,
): string | undefined => {
	const lineText = document.lineAt(position).text;
	const fieldMatch = lineText.match(/(\w+)\s+\w+/);
	return fieldMatch ? fieldMatch[1] : undefined;
};
