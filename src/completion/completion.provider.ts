import * as vscode from "vscode";
import { getLibrarySuggestions, getTagSpecificSuggestions } from "./suggestion";
import { isInsideQuotes } from "../utils/check_quote.util";
import { isInsideGoStruct } from "../utils/check_struct.util";

export class GoTagCompletionProvider implements vscode.CompletionItemProvider {
	// Main function to provide completion items based on cursor context
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
		// Restrict suggestions to Go structs only
		if (!isInsideGoStruct(document, position)) {
			return undefined;
		}

		const linePrefix = document
			.lineAt(position)
			.text.substring(0, position.character);

		// Type 1 Trigger: Backtick (`) outside quotes, Ctrl+Space outside quotes, or space after a completed tag
		if (
			linePrefix
				.trim()
				.endsWith("`") || // Initial backtick typed
			(context.triggerKind === vscode.CompletionTriggerKind.Invoke &&
				!isInsideQuotes(linePrefix)) || // Ctrl+Space outside quotes
			linePrefix.match(/.*"\s$/) // Space after a completed tag (e.g., `json:"something" `)
		) {
			return getLibrarySuggestions();
		}

		// Type 2 Trigger: Inside quotes after a library tag (e.g., `json:"|"`)
		const insideQuotesMatch = linePrefix.match(
			/(gorm|validate|json):"([^"]*)$/,
		);
		if (insideQuotesMatch) {
			const tagType = insideQuotesMatch[1]; // e.g., "json"
			const tagValue = insideQuotesMatch[2]; // Content inside quotes

			// Show Type 2 suggestions when inside quotes or after trigger characters
			if (
				tagValue.trim() === "" || // Fresh insertion (e.g., `json:"|"`)
				[" ", "=", ";", ","].some((char) => tagValue.endsWith(char)) // Trigger characters inside quotes
			) {
				return getTagSpecificSuggestions(tagType, document, position);
			}
		}

		return undefined; // No suggestions if no conditions match
	}
}
