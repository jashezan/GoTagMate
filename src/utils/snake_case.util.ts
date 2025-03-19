/**
 * Converts CamelCase to snake_case.
 */
export function toSnakeCase(str: string): string {
	return str
	  .replace(/([A-Z])/g, (letter) => `_${letter.toLowerCase()}`)
	  .replace(/^_/, "")
	  .replace(/([a-z])_([a-z])/g, (match, p1, p2) => `${p1}${p2}`)
	  .replace(/_+/g, "_");
  }