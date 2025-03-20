import * as vscode from "vscode";

/**
 * The `createCompletionItem` function in TypeScript creates a vscode.CompletionItem with label,
 * detail, insert text, documentation, and trigger options.
 * @param {string} label - The `label` parameter is a string that represents the main text that will be
 * displayed in the completion suggestion list. It is the primary text that the user will see and
 * potentially select when using code completion.
 * @param {string} detail - The `detail` parameter in the `createCompletionItem` function is used to
 * provide additional information about the completion item. This information is displayed inline in
 * the suggestion list when the user is browsing through the available completions. It helps the user
 * differentiate between similar completion items by providing more context or details about
 * @param {string} insertText - The `insertText` parameter in the `createCompletionItem` function is
 * used to specify the text that will be inserted into the editor when the completion item is selected
 * from the suggestion list. This text can be a simple string or a snippet string that includes
 * placeholders for dynamic values.
 * @param {boolean} triggerOnInsert - The `triggerOnInsert` parameter in the `createCompletionItem`
 * function is a boolean value that determines whether to re-trigger suggestions after the completion
 * item is inserted. If `triggerOnInsert` is set to `true`, it will automatically trigger suggestions
 * again after the completion item is inserted. This can
 * @param {string | string[]} [documentation] - The `documentation` parameter in the
 * `createCompletionItem` function allows you to provide additional information or documentation for
 * the completion item. This information can help users understand how to use the completion item
 * effectively.
 * @returns The `createCompletionItem` function returns a `vscode.CompletionItem` object with the
 * specified label, detail, insert text, documentation, and trigger behavior settings.
 */
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
