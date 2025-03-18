import * as vscode from "vscode";
import { fetchGormKeywords, fetchValidateKeywords, fetchJSONKeywords } from "./tags";

export class GoTagCompletionProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
		const linePrefix = document
			.lineAt(position)
			.text.substring(0, position.character);

		// Trigger suggestions when backtick is typed or Ctrl+Space is pressed
		if (
			linePrefix.endsWith("`") ||
			context.triggerKind === vscode.CompletionTriggerKind.Invoke
		) {
			return this.getInitialTagSuggestions();
		}

		// Trigger suggestions when inside double quotes or after trigger characters
		const insideQuotesMatch = linePrefix.match(
			/(gorm|validate|json):"([^"]*)$/,
		);
		if (insideQuotesMatch) {
			const tagType = insideQuotesMatch[1];
			const tagValue = insideQuotesMatch[2];

			// Re-trigger suggestions if the cursor is inside double quotes or after trigger characters
			if (
				tagValue.trim() === "" ||
				[" ", "=", ";", ","].some((char) => tagValue.endsWith(char))
			) {
				return this.getTagSpecificSuggestions(
					tagType,
					document,
					position,
				);
			}
		}

		return undefined;
	}

	private getInitialTagSuggestions(): vscode.CompletionItem[] {
		return [
			this.createCompletionItem(
				"json",
				"JSON tags for struct fields",
				'json:"$1"',
				6,
			), // Place cursor inside quotes
			this.createCompletionItem(
				"gorm",
				"GORM tags for database fields",
				'gorm:"$1"',
				6,
			), // Place cursor inside quotes
			this.createCompletionItem(
				"validate",
				"Validation tags for struct fields",
				'validate:"$1"',
				10,
			), // Place cursor inside quotes
		];
	}

	private getTagSpecificSuggestions(
		tagType: string,
		document: vscode.TextDocument,
		position: vscode.Position,
	): vscode.CompletionItem[] {
		switch (tagType) {
			case "gorm":
				return this.getGormCompletionItems();
			case "validate":
				return this.getValidateCompletionItems();
			case "json":
				return this.getJsonCompletionItems(document, position);
			default:
				return [];
		}
	}

	private getGormCompletionItems(): vscode.CompletionItem[] {
		return fetchGormKeywords.tag_list.map((tag) =>
			this.createCompletionItem(
				tag.tag_name,
				tag.tag_description,
				tag.tag_name,
				0,
				tag.tag_usage,
			),
		);
	}

	private getValidateCompletionItems(): vscode.CompletionItem[] {
		return fetchValidateKeywords.tag_list.map((tag) =>
			this.createCompletionItem(
				tag.tag_name,
				tag.tag_description,
				tag.tag_name,
				0,
				tag.tag_usage,
			),
		);
	}

	private getJsonCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
	): vscode.CompletionItem[] {
		const jsonSuggestions = fetchJSONKeywords.tag_list.map((tag) =>
			this.createCompletionItem(
				tag.tag_name,
				tag.tag_description,
				tag.tag_name,
				0,
				tag.tag_usage,
			),
		);

		// Add snake_case suggestions for the field name
		const fieldName = this.getFieldName(document, position);
		if (fieldName) {
			const snakeCaseField = this.toSnakeCase(fieldName);
			jsonSuggestions.unshift(
				this.createCompletionItem(
					snakeCaseField,
					`JSON key for field "${fieldName}"`,
					snakeCaseField,
					0,
				),
			);
		}

		return jsonSuggestions;
	}

	private getFieldName(
		document: vscode.TextDocument,
		position: vscode.Position,
	): string | undefined {
		const lineText = document.lineAt(position).text;
		const fieldMatch = lineText.match(/(\w+)\s+\w+/);
		return fieldMatch ? fieldMatch[1] : undefined;
	}

	private toSnakeCase(str: string): string {
		// Handle acronyms (e.g., ID -> id, DBName -> db_name)
		return str
			// Insert an underscore before uppercase letters that are not at the start of the string
			.replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`)
			// Remove leading underscores
			.replace(/^_/, "")
			// Handle special cases for acronyms (e.g., ID -> id, DB -> db)
			.replace(/([a-z])_([a-z])/g, (match, p1, p2) => `${p1}${p2}`)
			// Convert multiple underscores to a single underscore
			.replace(/_+/g, "_");
	}

	private createCompletionItem(
		label: string,
		detail: string,
		insertText: string,
		cursorOffset = 0,
		documentation?: string | string[],
	): vscode.CompletionItem {
		const completionItem = new vscode.CompletionItem(
			label,
			vscode.CompletionItemKind.Field,
		);
		completionItem.detail = detail;
		completionItem.insertText = new vscode.SnippetString(insertText);

		// Format documentation with Markdown
		if (documentation) {

			const docString = Array.isArray(documentation)
				? documentation.map((doc) => `Usage: \`${doc}\``).join("\n\n")
				: `Usage: \`${documentation}\``;
			completionItem.documentation = new vscode.MarkdownString(docString);
		}

		// Move the cursor inside the double quotes
		if (cursorOffset > 0) {
			completionItem.range = new vscode.Range(
				new vscode.Position(0, 0),
				new vscode.Position(0, cursorOffset),
			);
		}

		return completionItem;
	}
}
