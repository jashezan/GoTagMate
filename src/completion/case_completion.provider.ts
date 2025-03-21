import type * as vscode from "vscode";
import {
	toCamelCase,
	toPascalCase,
	toScreamingSnakeCase,
	toSnakeCase,
	toTrainCase,
} from "../utils/case_conversion.util";
import { createCompletionItem } from "../utils/completion_item.util";

type CASES =
	| "snake_case"
	| "SCREAMING_SNAKE_CASE"
	| "Train_Case"
	| "PascalCase"
	| "camelCase"
	| null
	| undefined;

// export function addFieldSuggestions(
// 	suggestions: vscode.CompletionItem[],
// 	fieldName: string,
// 	keyword: string,
// 	casesToApply: CASES[] = [], // New parameter to control which cases to apply
// ) {
// 	try {
// 		if (!fieldName || !keyword) return;

// 		// Define all possible case conversions
// 		const cases: { converter: (str: string) => string; label: CASES }[] = [
// 			{ converter: toSnakeCase, label: "snake_case" },
// 			{ converter: toScreamingSnakeCase, label: "SCREAMING_SNAKE_CASE" },
// 			{ converter: toTrainCase, label: "Train_Case" },
// 			{ converter: toPascalCase, label: "PascalCase" },
// 			{ converter: toCamelCase, label: "camelCase" },
// 		];

// 		// If casesToApply is specified, filter the cases to apply only the ones included in it
// 		const filteredCases =
// 			casesToApply.length > 0
// 				? cases.filter(({ label }: { label: CASES }) =>
// 						casesToApply.includes(label),
// 					)
// 				: cases;

// 		// Generate the completion items based on the filtered cases
// 		for (const { converter, label } of filteredCases) {
// 			const convertedField = converter(fieldName);
// 			suggestions.unshift(
// 				createCompletionItem(
// 					convertedField,
// 					`${keyword.toUpperCase()} key for field "${fieldName}" (converted to ${label})`,
// 					convertedField,
// 					false,
// 					[`${keyword}:"${convertedField}"`],
// 				),
// 			);
// 		}
// 	} catch (error) {
// 		return;
// 	}
// }
// Predefined, frozen case converters
const CASES = Object.freeze([
	{ converter: toSnakeCase, label: "snake_case" },
	{ converter: toScreamingSnakeCase, label: "SCREAMING_SNAKE_CASE" },
	{ converter: toTrainCase, label: "Train_Case" },
	{ converter: toPascalCase, label: "PascalCase" },
	{ converter: toCamelCase, label: "camelCase" },
] as const);

export function addFieldSuggestions(
	suggestions: vscode.CompletionItem[],
	fieldName: string,
	keyword: string,
	casesToApply: CASES[] = [], // New parameter to control which cases to apply
): void {
	// Early exit for invalid inputs
	if (!fieldName || !keyword) return;

	// Use full list or filtered subset based on casesToApply
	const applicableCases =
		casesToApply.length > 0
			? CASES.filter(({ label }) => casesToApply.includes(label))
			: CASES;

	// Precompute keyword in uppercase to avoid repeated calls
	const upperKeyword = keyword.toUpperCase();

	// Generate completion items
	for (const { converter, label } of applicableCases) {
		const convertedField = converter(fieldName);
		suggestions.unshift(
			createCompletionItem(
				convertedField,
				`${upperKeyword} key for field "${fieldName}" (converted to ${label})`,
				convertedField,
				false,
				[`${keyword}:"${convertedField}"`],
			),
		);
	}
}
