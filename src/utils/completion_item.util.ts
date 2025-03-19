import * as vscode from "vscode";

export const createCompletionItem = (
	label: string,
	detail: string,
	insertText: string,
	triggerOnInsert: boolean,
	documentation?: string | string[],
): vscode.CompletionItem => {
	const completionItem = new vscode.CompletionItem(
		label,
		vscode.CompletionItemKind.Field,
	);

	// Set detail text (shown inline in the suggestion list)
	completionItem.detail = detail;

	// Set the text to insert when selected
	completionItem.insertText = new vscode.SnippetString(insertText);

	// Add Markdown-formatted documentation for the details box using template literals
	if (documentation && documentation.length > 0) {
		const docString = Array.isArray(documentation)
			? `${detail}\n\n${documentation.map((doc) => `Usage: \`${doc}\``).join("\n\n")}`
			: `${detail}\n\nUsage: \`${documentation}\``;
		const markdown = new vscode.MarkdownString(docString);
		markdown.isTrusted = true; // Allow Markdown rendering
		completionItem.documentation = markdown;

		// Encourage VSCode to show the details box automatically on highlight
		completionItem.preselect = true; // Preselect to prioritize the item
	}

	// Re-trigger suggestions after insertion (for Type 1)
	if (triggerOnInsert) {
		completionItem.command = {
			command: "editor.action.triggerSuggest",
			title: "Re-trigger suggestions",
		};
	}

	return completionItem;
};
