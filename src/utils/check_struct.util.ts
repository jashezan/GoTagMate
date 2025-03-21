import type * as vscode from "vscode";

export const isInsideGoStruct = (
	document: vscode.TextDocument,
	position: vscode.Position,
): boolean => {
	let openCount = 0;
	let pendingStruct = false;

	// Precompiled patterns
	const structPattern = /\bstruct\b/; // Just "struct" anywhere in the line
	const openBrace = /\{/;
	const closeBrace = /\}/;

	for (let i = 0; i <= position.line; i++) {
		const isCurrentLine = i === position.line;
		const line = document.lineAt(i);
		const text = isCurrentLine
			? line.text.slice(0, position.character)
			: line.text;

		// Skip empty or whitespace-only lines efficiently
		if (!text || /^\s*$/.test(text)) {
			if (pendingStruct && !isCurrentLine) continue; // Keep waiting for brace
			continue;
		}

		// Check for "struct" keyword
		if (pendingStruct) {
			if (openBrace.test(text)) {
				openCount++;
				pendingStruct = false;
			} else if (structPattern.test(text) || closeBrace.test(text)) {
				// Another "struct" or "}" cancels the pending state
				pendingStruct = false;
			}
			// Continue waiting if no brace yet
		} else if (structPattern.test(text)) {
			if (openBrace.test(text)) {
				// "struct {" on same line
				openCount++;
			} else {
				// "struct" alone, start waiting for brace
				pendingStruct = true;
			}
		} else {
			// Count standalone braces
			openCount += (text.match(openBrace) || []).length;
			openCount -= (text.match(closeBrace) || []).length;
		}
	}

	return openCount > 0;
};
