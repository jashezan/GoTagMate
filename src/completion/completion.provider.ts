import * as vscode from "vscode";
import { TRIGGER_CHARACTERS } from "../constants/trigger_chars.const";
import { checkInsideQuotes } from "../utils/check_quote.util";
import { isInsideGoStruct } from "../utils/check_struct.util";
import { getLibrarySuggestions } from "./suggestion/library.suggest";
import { getTagSpecificSuggestions } from "./suggestion/tag.suggest";

/* The `GoTagCompletionProvider` class in TypeScript provides completion suggestions for Go struct tags
based on specific triggers and context. */
export class GoTagCompletionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
		// Early exit if cancelled
		if (token.isCancellationRequested) return undefined;

		// Restrict suggestions to Go structs only
		if (!isInsideGoStruct(document, position)) return undefined;

		// Cache line text to avoid repeated calls
		const line = document.lineAt(position);
		const linePrefix = line.text.slice(0, position.character);

		// Type 1 Trigger: Backtick, Ctrl+Space, or space after tag
		const trimmedPrefix = linePrefix.trim();
		if (
			trimmedPrefix.endsWith("`") || // Initial backtick
			(context.triggerKind === vscode.CompletionTriggerKind.Invoke &&
				!checkInsideQuotes(linePrefix).isMatched) || // Ctrl+Space outside quotes
			linePrefix.endsWith('" ') // Space after completed tag
		) {
			return getLibrarySuggestions();
		}

		// Type 2 Trigger: Inside quotes after a library tag
		const result = checkInsideQuotes(linePrefix);
		if (result.isMatched) {
			const { tagType, tagValue } = result;
			const trimmedValue = tagValue?.trim();
			if (
				trimmedValue === "" || // Fresh insertion
				TRIGGER_CHARACTERS.some((char) => tagValue!.endsWith(char)) // Trigger characters
			) {
				return getTagSpecificSuggestions(tagType!, document, position);
			}
		}

		return undefined; // No suggestions if no conditions match
	}
}
