import * as vscode from "vscode";
import { TRIGGER_CHARACTERS } from "../constants/trigger_chars.const";
import { checkInsideQuotes } from "../utils/check_quote.util";
import { isInsideGoStruct } from "../utils/check_struct.util";
import { getLibrarySuggestions } from "./suggestion/library.suggest";
import { getTagSpecificSuggestions } from "./suggestion/tag.suggest";

/* The `GoTagCompletionProvider` class in TypeScript provides completion items for Go structs based on
cursor context. */
export class GoTagCompletionProvider implements vscode.CompletionItemProvider {
	// Main function to provide completion items based on cursor context
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
		try {
			// Restrict suggestions to Go structs only
			if (!isInsideGoStruct(document, position)) {
				return undefined;
			}

			// The code snippet `const linePrefix = document.lineAt(position).text.substring(0, position.character);` is extracting the text content of the current line in the document up to the current cursor position.
			const linePrefix = document
				.lineAt(position)
				.text.substring(0, position.character);

			// Type 2 Trigger: Inside quotes after a library tag (e.g., `json:"|"`)
			const result = checkInsideQuotes(linePrefix);
			if (result.isMatched) {
				const tagType = result.tagType; // e.g., "json"
				const tagValue = result.tagValue; // Content inside quotes

				// Show Type 2 suggestions when inside quotes or after trigger characters
				if (
					tagValue?.trim() === "" || // Fresh insertion (e.g., `json:"|"`)
					TRIGGER_CHARACTERS.some((char) => tagValue?.endsWith(char)) // Trigger characters inside quotes
				) {
					return getTagSpecificSuggestions(
						tagType!,
						document,
						position,
					);
				}
			}

			// Type 1 Trigger: Backtick (`) outside quotes, Ctrl+Space outside quotes, or space after a completed tag
			if (
				linePrefix
					.trim()
					.endsWith("`") || // Initial backtick typed
				(context.triggerKind === vscode.CompletionTriggerKind.Invoke &&
					!checkInsideQuotes(linePrefix).isMatched) || // Ctrl+Space outside quotes
				linePrefix.match(/.*"\s$/) // Space after a completed tag (e.g., `json:"something" `)
			) {
				return getLibrarySuggestions();
			}

			return undefined; // No suggestions if no conditions match
		} catch (error) {
			return undefined;
		}
	}
}
