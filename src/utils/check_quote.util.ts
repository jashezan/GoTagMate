/**
 * The function `checkInsideQuotes` checks if a given string contains a specific tag type followed by
 * content inside double quotes.
 * @param {string} linePrefix - The `linePrefix` parameter is a string that represents the beginning of
 * a line of code. The function `checkInsideQuotes` is designed to check if the linePrefix contains a
 * specific pattern related to environment variables, database tags, validation rules, JSON properties,
 * or Redis configurations enclosed in double quotes.
 * @returns The function `checkInsideQuotes` returns an object with the following properties:
 * - `isMatched`: a boolean indicating whether a match was found, true if a match was found, false if not
 * - `tagType`: a string representing the type of tag found (e.g., "json")
 * - `tagValue`: a string representing the content inside the quotes if a match was found, or `null` if
 * no match was found
 */
export const checkInsideQuotes = (
	linePrefix: string,
): {
	isMatched: boolean;
	tagType: string | null;
	tagValue: string | null;
} => {
	try {
		const pattern =
			/(env|gorm|validate|json|redis|binding|xml|yaml|form|toml|hcl|msgpack|bson|dynamodbav|bun|conform|schema):"([^"]*)$/;
		const match = linePrefix.match(pattern);
		if (match) {
			return {
				isMatched: true,
				tagType: match[1], // e.g., "json"
				tagValue: match[2], // Content inside quotes
			};
		}
		return {
			isMatched: false,
			tagType: null,
			tagValue: null,
		};
	} catch (error) {
		return {
			isMatched: false,
			tagType: null,
			tagValue: null,
		};
	}
};
