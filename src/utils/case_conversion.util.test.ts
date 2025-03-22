// import { describe, expect, it } from "vitest";
// import { toCamelCase, toSnakeCase } from "./case_conversion.util";

// describe("toSnakeCase", () => {
// 	const testCases: [string, string][] = [
// 		// ✅ Main cases
// 		["UserID", "user_id"],
// 		["DBName", "db_name"],
// 		["ID", "id"],
// 		["Id", "id"],
// 		["id", "id"],
// 		["Snake_Case", "snake_case"],
// 		["snake_Return", "snake_return"],
// 		["FullName", "full_name"],
// 		["normalCase", "normal_case"],
// 		["PascalCase", "pascal_case"],
// 		["MBBSMunna", "mbbs_munna"],

// 		// ✅ Edge cases
// 		["DBConfig", "db_config"], // Multiple uppercase together
// 		["APIKey", "api_key"], // Common acronym case
// 		["SomeXYZData", "some_xyz_data"], // Complex multi-uppercase
// 		["A", "a"], // Single letter
// 		["AB", "ab"], // Single uppercase acronym
// 		["A_B", "a_b"], // Underscore with single letters
// 		["_leadingUnderscore", "leading_underscore"], // Leading underscore
// 		["trailingUnderscore_", "trailing_underscore"], // Trailing underscore
// 		["multiple__underscores", "multiple_underscores"], // Multiple underscores
// 		["Already_Snake_Case", "already_snake_case"], // Already in snake_case
// 		["withNumbers123", "with_numbers123"], // Numbers should remain intact
// 		["123NumbersFirst", "123_numbers_first"], // Number at start
// 		["special!@#$%^&*()Chars", "special!@#$%^&*()_chars"], // Special chars
// 		["jsonString", "json_string"], // JSON should be handled
// 	];

// 	testCases.forEach(([input, expected]) => {
// 		it(`should convert "${input}" to "${expected}"`, () => {
// 			expect(toSnakeCase(input)).toBe(expected);
// 		});
// 	});
// });

// describe("toCamelCase", () => {
// 	const testCases: [string, string][] = [
// 		// ✅ Main cases
// 		["UserID", "userId"],
// 		["DBName", "dbName"],
// 		["ID", "id"],
// 		["Id", "id"],
// 		["id", "id"],
// 		["Snake_Case", "snakeCase"],
// 		["snake_Return", "snakeReturn"],
// 		["FullName", "fullName"],
// 		["normalCase", "normalCase"],
// 		["PascalCase", "pascalCase"],
// 		["MBBSMunna", "mbbsMunna"],

// 		// ✅ Edge cases
// 		["DBConfig", "dbConfig"], // Multiple uppercase together
// 		["APIKey", "apiKey"], // Common acronym case
// 		["SomeXYZData", "someXyzData"], // Complex multi-uppercase
// 		["A", "a"], // Single letter
// 		["AB", "ab"], // Single uppercase acronym
// 		["A_B", "aB"], // Underscore with single letters
// 		["_leadingUnderscore", "leadingUnderscore"], // Leading underscore
// 		["trailingUnderscore_", "trailingUnderscore"], // Trailing underscore
// 		["multiple__underscores", "multipleUnderscores"], // Multiple underscores
// 		["AlreadyCamelCase", "alreadyCamelCase"], // Already in camelCase
// 		["withNumbers123", "withNumbers123"], // Numbers should remain intact
// 		["123NumbersFirst", "123NumbersFirst"], // Number at start
// 		["jsonString", "jsonString"], // JSON should be handled
// 		["kebab-case", "kebabCase"], // Kebab case
// 		["special!@#$%^&*()Chars", "special!@#$%^&*()Chars"],
// 		["mixed-case_withKebab", "mixedCaseWithKebab"], // Mixed kebab and snake
// 	];

// 	testCases.forEach(([input, expected]) => {
// 		it(`should convert "${input}" to "${expected}"`, () => {
// 			expect(toCamelCase(input)).toBe(expected);
// 		});
// 	});
// });
