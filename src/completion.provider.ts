import * as vscode from "vscode";
import {
	fetchGormKeywords,
	fetchJSONKeywords,
	fetchValidateKeywords,
} from "./tags";

export class GoTagCompletionProvider implements vscode.CompletionItemProvider {
	// Main function to provide completion items based on cursor context
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList> {
		// Restrict suggestions to Go structs only
		if (!this.isInsideGoStruct(document, position)) {
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
				!this.isInsideQuotes(linePrefix)) || // Ctrl+Space outside quotes
			linePrefix.match(/.*"\s$/) // Space after a completed tag (e.g., `json:"something" `)
		) {
			return this.getLibrarySuggestions();
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
				return this.getTagSpecificSuggestions(
					tagType,
					document,
					position,
				);
			}
		}

		return undefined; // No suggestions if no conditions match
	}

	// Helper: Check if cursor is inside a Go struct
	private isInsideGoStruct(
		document: vscode.TextDocument,
		position: vscode.Position,
	): boolean {
		const textBefore = document.getText(
			new vscode.Range(new vscode.Position(0, 0), position),
		);
		const structOpen = textBefore.lastIndexOf("struct {");
		const structClose = textBefore.lastIndexOf("}");
		return (
			structOpen !== -1 &&
			(structClose === -1 || structClose < structOpen)
		);
	}

	// Helper: Check if cursor is inside quotes (for Ctrl+Space differentiation)
	private isInsideQuotes(linePrefix: string): boolean {
		return !!linePrefix.match(/(gorm|validate|json):"([^"]*)$/);
	}

	// Type 1 Suggestions: Library tags (`json:""`, `gorm:""`, `validate:""`)
	private getLibrarySuggestions(): vscode.CompletionItem[] {
		return [
			this.createCompletionItem(
				"json",
				"JSON tags for struct fields", // Detail text for hover
				'json:"$1"', // Insert with cursor inside quotes
				true, // Re-trigger suggestions
				['json:"field_name"'], // Documentation example
			),
			this.createCompletionItem(
				"gorm",
				"GORM tags for database fields",
				'gorm:"$1"',
				true,
				['gorm:"column:name"'],
			),
			this.createCompletionItem(
				"validate",
				"Validation tags for struct fields",
				'validate:"$1"',
				true,
				['validate:"required"'],
			),
		];
	}

	// Type 2 Suggestions: Tag-specific options based on selected library
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

	// GORM-specific suggestions
	private getGormCompletionItems(): vscode.CompletionItem[] {
		return (fetchGormKeywords?.tag_list ?? []).map((tag) =>
			this.createCompletionItem(
				tag.tag_name ?? "",
				tag.tag_description ?? "", // Detail text for hover
				tag.tag_name ?? "",
				false, // No re-trigger here
				tag.tag_usage ?? [], // Documentation from tags.ts
			),
		);
	}

	// Validate-specific suggestions
	private getValidateCompletionItems(): vscode.CompletionItem[] {
		return (fetchValidateKeywords.tag_list ?? []).map((tag) =>
			this.createCompletionItem(
				tag.tag_name ?? "",
				tag.tag_description ?? "",
				tag.tag_name ?? "",
				false,
				tag.tag_usage ?? [],
			),
		);
	}

	// JSON-specific suggestions
	private getJsonCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
	): vscode.CompletionItem[] {
		const jsonSuggestions = (fetchJSONKeywords.tag_list ?? []).map((tag) =>
			this.createCompletionItem(
				tag.tag_name ?? "",
				tag.tag_description ?? "",
				tag.tag_name ?? "",
				false,
				tag.tag_usage ?? "",
			),
		);

		// Add snake_case field name as top suggestion
		const fieldName = this.getFieldName(document, position);
		if (fieldName) {
			const snakeCaseField = this.toSnakeCase(fieldName);
			jsonSuggestions.unshift(
				this.createCompletionItem(
					snakeCaseField,
					`JSON key for field "${fieldName}"`, // Detail text
					snakeCaseField,
					false,
					[`json:"${snakeCaseField}"`], // Documentation example
				),
			);
		}

		return jsonSuggestions;
	}

	// Helper: Extract field name from the current line
	private getFieldName(
		document: vscode.TextDocument,
		position: vscode.Position,
	): string | undefined {
		const lineText = document.lineAt(position).text;
		const fieldMatch = lineText.match(/(\w+)\s+\w+/);
		return fieldMatch ? fieldMatch[1] : undefined;
	}

	// Helper: Convert CamelCase to snake_case
	private toSnakeCase(str: string): string {
		return str
			.replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`)
			.replace(/^_/, "")
			.replace(/([a-z])_([a-z])/g, (match, p1, p2) => `${p1}${p2}`)
			.replace(/_+/g, "_");
	}

	// Helper: Create a completion item with detail and documentation
	private createCompletionItem(
		label: string,
		detail: string,
		insertText: string,
		triggerOnInsert: boolean,
		documentation?: string | string[],
	): vscode.CompletionItem {
		const completionItem = new vscode.CompletionItem(
			label,
			vscode.CompletionItemKind.Field,
		);
		completionItem.detail = detail; // Text shown in details box beside suggestion
		completionItem.insertText = new vscode.SnippetString(insertText);

		// Add Markdown-formatted documentation for hover/details
		if (documentation) {
			const docString = Array.isArray(documentation)
				? documentation.map((doc) => `Usage: \`${doc}\``).join("\n\n")
				: `Usage: \`${documentation}\``;
			completionItem.documentation = new vscode.MarkdownString(docString);
		}

		// Re-trigger suggestions after insertion (for Type 1)
		if (triggerOnInsert) {
			completionItem.command = {
				command: "editor.action.triggerSuggest",
				title: "Re-trigger suggestions",
			};
		}

		return completionItem;
	}
}
