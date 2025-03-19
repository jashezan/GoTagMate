import * as vscode from "vscode";

export const isInsideGoStruct = (
	document: vscode.TextDocument,
	position: vscode.Position,
): boolean => {
	const textBefore = document.getText(
		new vscode.Range(new vscode.Position(0, 0), position),
	);
	const structOpen = textBefore.lastIndexOf("struct {");
	const structClose = textBefore.lastIndexOf("}");
	return (
		structOpen !== -1 && (structClose === -1 || structClose < structOpen)
	);
};
