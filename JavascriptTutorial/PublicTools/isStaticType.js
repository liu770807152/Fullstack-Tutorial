function isStatic(value) {
	return (
		typeof value === 'number' ||
		typeof value === 'string' ||
		typeof value === 'boolean' ||
		typeof value === 'undefined' ||
		value === null
	);
}

module.exports = isStatic;
