import * as vscode from "vscode";
import { findStructBounds } from "./struct_bound.util";

/**
 * The function `isInsideGoStruct` checks if the current position in a TypeScript document is inside a
 * Go struct definition.
 * @param document - The `document` parameter is of type `vscode.TextDocument`, which represents the
 * text content of a document in the VS Code editor. It contains methods and properties for working
 * with the text content, such as getting text ranges and lines.
 * @param position - The `position` parameter in the `isInsideGoStruct` function represents the current
 * cursor position within the `document` in a Visual Studio Code editor.
 * @returns The function `isInsideGoStruct` returns a boolean value indicating whether the provided
 * position in the text document is inside a Go struct definition.
 */
export const isInsideGoStruct = (
	document: vscode.TextDocument,
	position: vscode.Position,
): boolean => {
	try {
		const textBefore = document.getText(
			new vscode.Range(new vscode.Position(0, 0), position),
		);
		const {structOpen, structClose} = findStructBounds(textBefore);
		return (
			structOpen !== -1 &&
			(structClose === -1 || structClose < structOpen)
		);
	} catch (error) {
		return false;
	}
};
