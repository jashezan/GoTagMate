/**
 * The function isInsideQuotes checks if a given line prefix contains a specific pattern related to
 * quotes in Golang code.
 * @param {string} linePrefix - The `linePrefix` parameter is a string that represents the beginning of
 * a line of code or text.
 * @returns The function `isInsideQuotes` returns a boolean value indicating whether the `linePrefix`
 * contains a specific pattern related to `gorm`, `validate`, or `json` followed by a double quote.
 */
export const isInsideQuotes = (linePrefix: string): boolean => {
	return !!linePrefix.match(/(gorm|validate|json):"([^"]*)$/);
};
