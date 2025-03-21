/**
 * The function `toSnakeCase` converts a given string to snake_case format.
 * @param {string} str - A string that you want to convert to snake_case.
 * @returns The function `toSnakeCase` takes a string as input and converts it to snake_case format. It
 * returns the input string converted to snake_case format.
 */
export function toSnakeCase(str: string): string {
	return str
		.replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`) // Converts uppercase to lowercase with an underscore
		.replace(/^_/, "") // Removes the underscore from the beginning of the string
		.replace(/([a-z])_([a-z])/g, (match, p1, p2) => `${p1}${p2}`) // Removes the underscore between two lowercase letters
		.replace(/_+/g, "_"); // Replaces multiple consecutive underscores with a single underscore
}

/**
 * The function `toScreamingSnakeCase` converts a given string to snake case and then converts it to
 * uppercase.
 * @param {string} str - A string that you want to convert to screaming snake case.
 * @returns The function `toScreamingSnakeCase` takes a string input, converts it to snake case, and
 * then returns the snake case string in uppercase (screaming snake case).
 */
export function toScreamingSnakeCase(str: string): string {
	return str
		.replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`) // Converts uppercase to lowercase with an underscore
		.replace(/^_/, "") // Removes the underscore from the beginning of the string
		.replace(/([a-z])_([a-z])/g, (match, p1, p2) => `${p1}${p2}`) // Removes the underscore between two lowercase letters
		.replace(/_+/g, "_") // Replaces multiple consecutive underscores with a single underscore
		.toUpperCase(); // Converts the string to uppercase
}

/**
 * The function `toTrainCase` converts a string to train case format by inserting underscores between
 * words and ensuring proper capitalization.
 * @param {string} str - The `toTrainCase` function takes a string as input and converts it to train
 * case format. Train case is a naming convention where each word in the string is capitalized and
 * separated by underscores.
 * @returns The function `toTrainCase` takes a string input and converts it to train case format, where
 * each word is capitalized and separated by underscores. The function performs several string
 * manipulations using regular expressions to achieve this formatting. The final result is the input
 * string converted to train case format.
 */
export function toTrainCase(str: string): string {
	return str
		.replace(/([a-z0-9])([A-Z])/g, "$1_$2") // Insert underscore between lowercase/number and uppercase
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2") // Separate consecutive uppercase followed by lowercase
		.replace(/[_\s-]+/g, "_") // Replace spaces, dashes, and multiple underscores with a single underscore
		.replace(/^(.)/, (c) => c.toUpperCase()) // Ensure the first letter is uppercase
		.replace(/_+(.)/g, (_, c) => `_${c.toUpperCase()}`); // Capitalize each word after an underscore
}

/**
 * The function `toPascalCase` converts a given string to PascalCase format by capitalizing the first
 * letter of each word and removing special characters.
 * @param {string} str - The `str` parameter is a string that represents the input text that you want
 * to convert to PascalCase.
 * @returns The function `toPascalCase` takes a string as input and returns the string converted to
 * PascalCase format.
 */
export function toPascalCase(str: string): string {
	return str
		.replace(/[_\s-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : "")) // Capitalize letters after special characters
		.replace(/^(.)/, (c) => c.toUpperCase()) // Ensure first letter is uppercase
		.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
}

/**
 * The function `toCamelCase` converts a string to camel case by converting the first letter to
 * lowercase.
 * @param {string} str - The `str` parameter in the `toCamelCase` function is a string that represents
 * the input text that you want to convert to camel case.
 * @returns The `toCamelCase` function returns a string in camelCase format.
 */
export function toCamelCase(str: string): string {
	return str
		.replace(/[_\s-]+(.)?/g, (_, c) => (c ? c.toUpperCase() : "")) // Capitalize letters after special characters
		.replace(/^(.)/, (c) => c.toLowerCase()) // Ensure the first letter is lowercase
		.replace(/[^a-zA-Z0-9]/g, ""); // Remove non-alphanumeric characters
}

/**
 * The function `toUpperCase` takes a string as input and returns the input string converted to
 * uppercase.
 * @param {string} str - The parameter `str` in the `toUpperCase` function is a string that you want to
 * convert to uppercase.
 * @returns The `toUpperCase` function is returning the input string `str` converted to uppercase.
 */
export function toUpperCase(str: string): string {
	return str.toUpperCase();
}

/**
 * The function `toLowerCase` converts a given string to lowercase in TypeScript.
 * @param {string} str - The parameter `str` is a string that will be converted to lowercase by the
 * `toLowerCase` function.
 * @returns The `toLowerCase` function is being returned, which converts a given string to lowercase.
 */
export function toLowerCase(str: string): string {
	return str.toLowerCase();
}
