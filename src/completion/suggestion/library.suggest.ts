import type * as vscode from "vscode";
import { createCompletionItem } from "../../utils/completion_item.util";

interface Tag {
	label: string;
	detail: string;
	insertText: string;
	triggerSuggest: boolean;
	documentation: readonly string[]; // Already readonly
}

// Predefined tags array, frozen for immutability
const tags: ReadonlyArray<Tag> = Object.freeze([
	Object.freeze({
		label: "json",
		detail: "JSON tags for struct fields",
		insertText: 'json:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['json:"field_name"']),
	}),
	Object.freeze({
		label: "bson",
		detail: "BSON tags for struct fields",
		insertText: 'bson:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['bson:"field_name"']),
	}),
	Object.freeze({
		label: "bun",
		detail: "Bun tags for struct fields",
		insertText: 'bun:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['bun:"field_name"']),
	}),
	Object.freeze({
		label: "conform",
		detail: "Conform tags for struct fields",
		insertText: 'conform:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['conform:"field_name"']),
	}),
	Object.freeze({
		label: "schema",
		detail: "Schema tags for struct fields",
		insertText: 'schema:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['schema:"field_name"']),
	}),
	Object.freeze({
		label: "env",
		detail: "ENV tags for struct fields",
		insertText: 'env:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['env:"FIELD_NAME"']),
	}),
	Object.freeze({
		label: "dynamodbav",
		detail: "Dynamodbav tags for struct fields",
		insertText: 'dynamodbav:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['dynamodbav:"FIELD_NAME"']),
	}),
	Object.freeze({
		label: "envDefault",
		detail: "Specifies a fallback value for the field if the environment variable is not set or empty.",
		insertText: 'envDefault:"$1"',
		triggerSuggest: false,
		documentation: Object.freeze([
			'env:"PORT" envDefault:"3000"',
			'env:"MODE" envDefault:"development"',
			'env:"TIMEOUT" envDefault:"30"',
		]),
	}),
	Object.freeze({
		label: "envPrefix",
		detail: "Prepends a prefix to environment variable names within a nested struct or complex type.",
		insertText: 'envPrefix:"$1"',
		triggerSuggest: false,
		documentation: Object.freeze([
			'envPrefix:"INNER_"',
			'envPrefix:"DB_" env:"CONFIG"',
			'envPrefix:"API_" envDefault:"default"',
		]),
	}),
	Object.freeze({
		label: "envSeparator",
		detail: "Customizes the character used to split environment variable values into slices or arrays.",
		insertText: 'envSeparator:"$1"',
		triggerSuggest: false,
		documentation: Object.freeze([
			'env:"ITEMS" envSeparator:"-"',
			'env:"LIST" envSeparator:";" envDefault:"a;b;c"',
			'env:"ARRAY" envSeparator:"|" envPrefix:"DATA_"',
		]),
	}),
	Object.freeze({
		label: "envKeyValSeparator",
		detail: "Sets the character that separates keys and values in map-type environment variables.",
		insertText: 'envKeyValSeparator:"$1"',
		triggerSuggest: false,
		documentation: Object.freeze([
			'env:"MAP" envKeyValSeparator:"|"',
			'env:"PAIRS" envKeyValSeparator:"=" envDefault:"k1=v1,k2=v2"',
			'env:"CONFIG" envKeyValSeparator:"-" envPrefix:"APP_"',
		]),
	}),
	Object.freeze({
		label: "gorm",
		detail: "GORM tags for database fields",
		insertText: 'gorm:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['gorm:"column:name"']),
	}),
	Object.freeze({
		label: "validate",
		detail: "Validation tags for struct fields",
		insertText: 'validate:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['validate:"required"']),
	}),
	Object.freeze({
		label: "binding",
		detail: "Gin Validation (Binding) tags for struct fields",
		insertText: 'binding:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['binding:"required"']),
	}),
	Object.freeze({
		label: "redis",
		detail: "Redis tags for struct fields",
		insertText: 'redis:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['redis:"-"']),
	}),
	Object.freeze({
		label: "xml",
		detail: "XML tags for struct fields",
		insertText: 'xml:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['xml:"name"']),
	}),
	Object.freeze({
		label: "yaml",
		detail: "YAML tags for struct fields",
		insertText: 'yaml:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['yaml:"name"']),
	}),
	Object.freeze({
		label: "toml",
		detail: "TOML tags for struct fields",
		insertText: 'toml:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['toml:"name"']),
	}),
	Object.freeze({
		label: "form",
		detail: "FORM tags for struct fields",
		insertText: 'form:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['form:"name"']),
	}),
	Object.freeze({
		label: "hcl",
		detail: "HCL tags for struct fields",
		insertText: 'hcl:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['hcl:"name"']),
	}),
	Object.freeze({
		label: "msgpack",
		detail: "MsgPack tags for struct fields",
		insertText: 'msgpack:"$1"',
		triggerSuggest: true,
		documentation: Object.freeze(['msgpack:"name"']),
	}),
	Object.freeze({
		label: "comment",
		detail: "Adds a # comment on the same line as the field in the TOML output.",
		insertText: 'comment:"$1"',
		triggerSuggest: false,
		documentation: Object.freeze([
			'toml:"postgres" comment:"Postgres configuration"',
		]),
	}),
	Object.freeze({
		label: "commented",
		detail: "Emits the field as a commented-out value when set to 'true'.",
		insertText: 'commented:"$1"',
		triggerSuggest: false,
		documentation: Object.freeze([
			'toml:"db" commented:"true" comment:"not used anymore"',
		]),
	}),
	Object.freeze({
		label: "default",
		detail: "Provides a default value for the field if not specified in TOML.",
		insertText: 'default:"$1"',
		triggerSuggest: false,
		documentation: Object.freeze(['toml:"user" default:"guest"']),
	}),
]);

// Precompute completion items once at startup
const completionItems: ReadonlyArray<vscode.CompletionItem> = Object.freeze(
	tags.map(({ label, detail, insertText, triggerSuggest, documentation }) =>
		createCompletionItem(
			label,
			detail,
			insertText,
			triggerSuggest,
			documentation,
		),
	),
);

// Return type matches VS Code's expectation, with runtime immutability
export const getLibrarySuggestions = (): vscode.CompletionItem[] =>
	completionItems as vscode.CompletionItem[];
