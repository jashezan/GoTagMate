/**
 * The function `toSnakeCase` converts a given string to snake_case format.
 * @param {string} str - A string that you want to convert to snake_case.
 * @returns The function `toSnakeCase` takes a string as input and converts it to snake_case format. It
 * returns the input string converted to snake_case format.
 */
export function toSnakeCase(str: string): string {
	return str
		.replace(/([a-z])([A-Z])/g, "$1_$2") // Separate lowercase-uppercase transitions
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2") // Separate acronyms from words
		.replace(/(\d+)([A-Za-z])/g, "$1_$2") // Separate numbers from letters
		.replace(/[^a-zA-Z0-9!@#$%^&*()]+/g, "_") // Replace non-alphanumeric characters (except special chars) with underscores
		.replace(/([!@#$%^&*()]+)([A-Za-z])/g, "$1_$2") // Separate special characters from letters
		.replace(/_+/g, "_") // Replace multiple underscores with a single underscore
		.replace(/^_+|_+$/g, "") // Trim leading & trailing underscores
		.toLowerCase();
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
		.replace(/([a-z])([A-Z])/g, "$1_$2") // Separate lowercase-uppercase transitions
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2") // Separate acronyms from words
		.replace(/(\d+)([A-Za-z])/g, "$1_$2") // Separate numbers from letters
		.replace(/[^a-zA-Z0-9!@#$%^&*()]+/g, "_") // Replace non-alphanumeric characters (except special chars) with underscores
		.replace(/([!@#$%^&*()]+)([A-Za-z])/g, "$1_$2") // Separate special characters from letters
		.replace(/_+/g, "_") // Replace multiple underscores with a single underscore
		.replace(/^_+|_+$/g, "") // Trim leading & trailing underscores
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
		.replace(/([a-z])([A-Z])/g, "$1_$2") // Separate lowercase-uppercase transitions
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2") // Separate acronyms from words
		.replace(/(\d+)([A-Za-z])/g, "$1_$2") // Separate numbers from letters
		.replace(/[^a-zA-Z0-9!@#$%^&*()]+/g, "_") // Replace non-alphanumeric characters (except special chars) with underscores
		.replace(/([!@#$%^&*()]+)([A-Za-z])/g, "$1_$2") // Separate special characters from letters
		.replace(/_+/g, "_") // Replace multiple underscores with a single underscore
		.replace(/^_+|_+$/g, "") // Trim leading & trailing underscores
		.toLowerCase() // Convert the string to lowercase
		.replace(/(^|_)(.)/g, (_, __, c) => c.toUpperCase()) // Capitalize the first letter of each word
		.replace(/[^a-zA-Z0-9]/g, ""); // Remove any remaining non-alphanumeric characters
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
		.replace(/([a-z])([A-Z])/g, "$1_$2") // Separate lowercase-uppercase transitions
		.replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2") // Separate acronyms from words
		.replace(/(\d+)([A-Za-z])/g, "$1_$2") // Separate numbers from letters
		.replace(/[^a-zA-Z0-9!@#$%^&*()]+/g, "_") // Replace non-alphanumeric characters (except special chars) with underscores
		.replace(/([!@#$%^&*()]+)([A-Za-z])/g, "$1_$2") // Separate special characters from letters
		.replace(/_+/g, "_") // Replace multiple underscores with a single underscore
		.replace(/^_+|_+$/g, "") // Trim leading & trailing underscores
		.toLowerCase()
		.split("_") // Split the string by underscores
		.map((word, index) => {
			if (index === 0) {
				// The first word should be lowercase
				return word.toLowerCase();
			}
			// Capitalize the first letter of subsequent words
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		})
		.join(""); // Join the words back together
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
