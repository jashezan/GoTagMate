import type * as vscode from "vscode";
import { createCompletionItem } from "../../utils/completion_item.util";

interface Tag {
	label: string;
	detail: string; // Detail text for hover
	insertText: string; // Insert with cursor inside quotes
	triggerSuggest: boolean; // Re-trigger suggestions
	documentation: string[]; // Documentation example - array of usage examples
}

const tags: Tag[] = [
	{
		label: "json",
		detail: "JSON tags for struct fields",
		insertText: 'json:"$1"',
		triggerSuggest: true,
		documentation: ['json:"field_name"'],
	},
	{
		label: "env",
		detail: "ENV tags for struct fields",
		insertText: 'env:"$1"',
		triggerSuggest: true,
		documentation: ['env:"FIELD_NAME"'],
	},
	{
		label: "envDefault",
		detail: "Specifies a fallback value for the field if the environment variable is not set or empty. This value is used during parsing if no environment variable is provided.",
		insertText: 'envDefault:"$1"',
		triggerSuggest: false,
		documentation: [
			'env:"PORT" envDefault:"3000"',
			'env:"MODE" envDefault:"development"',
			'env:"TIMEOUT" envDefault:"30"',
		],
	},
	{
		label: "envPrefix",
		detail: "Prepends a prefix to environment variable names within a nested struct or complex type, allowing grouped configuration (e.g., all DB settings prefixed with 'DB_').",
		insertText: 'envPrefix:"$1"',
		triggerSuggest: false,
		documentation: [
			'envPrefix:"INNER_"',
			'envPrefix:"DB_" env:"CONFIG"',
			'envPrefix:"API_" envDefault:"default"',
		],
	},
	{
		label: "envSeparator",
		detail: "Customizes the character used to split environment variable values into slices or arrays. Default is ',' but can be changed to handle different formats (e.g., '-' or ';').",
		insertText: 'envSeparator:"$1"',
		triggerSuggest: false,
		documentation: [
			'env:"ITEMS" envSeparator:"-"',
			'env:"LIST" envSeparator:";" envDefault:"a;b;c"',
			'env:"ARRAY" envSeparator:"|" envPrefix:"DATA_"',
		],
	},
	{
		label: "envKeyValSeparator",
		detail: "Sets the character that separates keys and values in map-type environment variables. Default is ':' but can be customized (e.g., '=' or '|') for parsing key-value pairs.",
		insertText: 'envKeyValSeparator:"$1"',
		triggerSuggest: false,
		documentation: [
			'env:"MAP" envKeyValSeparator:"|"',
			'env:"PAIRS" envKeyValSeparator:"=" envDefault:"k1=v1,k2=v2"',
			'env:"CONFIG" envKeyValSeparator:"-" envPrefix:"APP_"',
		],
	},
	{
		label: "gorm",
		detail: "GORM tags for database fields",
		insertText: 'gorm:"$1"',
		triggerSuggest: true,
		documentation: ['gorm:"column:name"'],
	},
	{
		label: "validate",
		detail: "Validation tags for struct fields",
		insertText: 'validate:"$1"',
		triggerSuggest: true,
		documentation: ['validate:"required"'],
	},
	{
		label: "binding",
		detail: "Gin Validation (Binding) tags for struct fields",
		insertText: 'binding:"$1"',
		triggerSuggest: true,
		documentation: ['binding:"required"'],
	},
	{
		label: "redis",
		detail: "Redis tags for struct fields",
		insertText: 'redis:"$1"',
		triggerSuggest: true,
		documentation: ['redis:"-"'],
	},
];

/**
 * The function `getLibrarySuggestions` returns an array of `vscode.CompletionItem` objects based on
 * the `tags` array.
 * @returns An array of `vscode.CompletionItem` objects is being returned. Each object is created based
 * on the properties of a `Tag` object from the `tags` array using the `createCompletionItem` function.
 */
export const getLibrarySuggestions = (): vscode.CompletionItem[] => {
	try {
		return tags.map(
			({
				label,
				detail,
				insertText,
				triggerSuggest,
				documentation,
			}: Tag) =>
				createCompletionItem(
					label,
					detail,
					insertText,
					triggerSuggest,
					documentation,
				),
		);
	} catch (error) {
		return [];
	}
};
