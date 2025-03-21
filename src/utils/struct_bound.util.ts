export function findStructBounds(textBefore: string) {
	const structOpenRegex = /struct\s*\{/g;
	let structOpenIndices = [];
	let match: RegExpExecArray | null;

	match = structOpenRegex.exec(textBefore);
	while (match !== null) {
		structOpenIndices.push(match.index);
		match = structOpenRegex.exec(textBefore);
	}

	const structCloseIndex = textBefore.lastIndexOf("}");

	if (structOpenIndices.length === 0) {
		return { structOpen: -1, structClose: structCloseIndex };
	}

	if (structCloseIndex === -1) {
		return { structOpen: Math.max(...structOpenIndices), structClose: -1 };
	}

	// Find the closest opening struct to the closing brace.
	let closestOpen = -1;
	for (let i = structOpenIndices.length - 1; i >= 0; i--) {
		if (structOpenIndices[i] < structCloseIndex) {
			closestOpen = structOpenIndices[i];
			break;
		}
	}

	return { structOpen: closestOpen, structClose: structCloseIndex };
}
