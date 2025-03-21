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
		label: "bson",
		detail: "BSON tags for struct fields",
		insertText: 'bson:"$1"',
		triggerSuggest: true,
		documentation: ['bson:"field_name"'],
	},
	{
		label: "bun",
		detail: "Bun tags for struct fields",
		insertText: 'bun:"$1"',
		triggerSuggest: true,
		documentation: ['bun:"field_name"'],
	},
	{
		label: "conform",
		detail: "Conform tags for struct fields",
		insertText: 'conform:"$1"',
		triggerSuggest: true,
		documentation: ['conform:"field_name"'],
	},
	{
		label: "schema",
		detail: "Schema tags for struct fields",
		insertText: 'schema:"$1"',
		triggerSuggest: true,
		documentation: ['schema:"field_name"'],
	},
	{
		label: "env",
		detail: "ENV tags for struct fields",
		insertText: 'env:"$1"',
		triggerSuggest: true,
		documentation: ['env:"FIELD_NAME"'],
	},
	{
		label: "dynamodbav",
		detail: "Dynamodbav tags for struct fields",
		insertText: 'dynamodbav:"$1"',
		triggerSuggest: true,
		documentation: ['dynamodbav:"FIELD_NAME"'],
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
	{
		label: "xml",
		detail: "XML tags for struct fields",
		insertText: 'xml:"$1"',
		triggerSuggest: true,
		documentation: ['xml:"name"'],
	},
	{
		label: "yaml",
		detail: "YAML tags for struct fields",
		insertText: 'yaml:"$1"',
		triggerSuggest: true,
		documentation: ['yaml:"name"'],
	},
	{
		label: "toml",
		detail: "TOML tags for struct fields",
		insertText: 'toml:"$1"',
		triggerSuggest: true,
		documentation: ['toml:"name"'],
	},
	{
		label: "form",
		detail: "FORM tags for struct fields",
		insertText: 'form:"$1"',
		triggerSuggest: true,
		documentation: ['form:"name"'],
	},
	{
		label: "hcl",
		detail: "HCL tags for struct fields",
		insertText: 'hcl:"$1"',
		triggerSuggest: true,
		documentation: ['hcl:"name"'],
	},
	{
		label: "msgpack",
		detail: "MsgPack tags for struct fields",
		insertText: 'msgpack:"$1"',
		triggerSuggest: true,
		documentation: ['msgpack:"name"'],
	},
	{
		label: "comment",
		detail: "Adds a # comment on the same line as the field in the TOML output, library: github.com/pelletier/go-toml",
		insertText: 'comment:"$1"',
		triggerSuggest: false,
		documentation: ['toml:"postgres" comment:"Postgres configuration"'],
	},
	{
		label: "commented",
		detail: "Emits the field as a commented-out value when set to 'true', library: github.com/pelletier/go-toml",
		insertText: 'commented:"$1"',
		triggerSuggest: false,
		documentation: [
			'toml:"db" commented:"true" comment:"not used anymore"',
		],
	},
	{
		label: "default",
		detail: "Provides a default value for the field if not specified in TOML, or if the value is empty or zero-valued, library: github.com/pelletier/go-toml",
		insertText: 'default:"$1"',
		triggerSuggest: false,
		documentation: ['toml:"user" default:"guest"'],
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
