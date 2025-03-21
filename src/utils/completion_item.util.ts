import * as vscode from "vscode";

/**
 * Creates a vscode.CompletionItem with label, detail, insert text, documentation, and trigger options.
 * @param label - The main text displayed in the completion suggestion list.
 * @param detail - Additional inline information shown in the suggestion list.
 * @param insertText - The text or snippet inserted when the item is selected.
 * @param triggerOnInsert - Whether to re-trigger suggestions after insertion.
 * @param documentation - Optional documentation (string or array of strings) for the details box.
 * @returns A configured `vscode.CompletionItem`.
 */
export const createCompletionItem = (
	label: string,
	detail: string,
	insertText: string,
	triggerOnInsert: boolean,
	documentation?: string | readonly string[] | undefined, // Fixed type
): vscode.CompletionItem => {
	const completionItem = new vscode.CompletionItem(
		label,
		vscode.CompletionItemKind.Field,
	);

	// Set detail text (shown inline in the suggestion list)
	completionItem.detail = detail;

	// Set the text to insert when selected
	completionItem.insertText = new vscode.SnippetString(insertText);

	// Add Markdown-formatted documentation for the details box
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

	// Re-trigger suggestions after insertion
	if (triggerOnInsert) {
		completionItem.command = {
			command: "editor.action.triggerSuggest",
			title: "Re-trigger suggestions",
		};
	}

	return completionItem;
};
