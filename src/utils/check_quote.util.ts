export const isInsideQuotes = (linePrefix: string): boolean => {
	return !!linePrefix.match(/(gorm|validate|json):"([^"]*)$/);
};
