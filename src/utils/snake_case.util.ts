/**
 * The function `toSnakeCase` converts a given string to snake_case format.
 * @param {string} str - A string that you want to convert to snake_case.
 * @returns The function `toSnakeCase` takes a string as input and converts it to snake_case format. It
 * returns the input string converted to snake_case format.
 */
export function toSnakeCase(str: string): string {
	return str
		.replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`)
		.replace(/^_/, "")
		.replace(/([a-z])_([a-z])/g, (match, p1, p2) => `${p1}${p2}`)
		.replace(/_+/g, "_");
}
