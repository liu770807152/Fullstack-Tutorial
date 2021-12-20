const isFunction = require('./isFunction');

function isPseudoArray(value) {
	function hasValidLength(val) {
		return (
			typeof val === 'number' &&
			val > -1 &&
			val % 1 === 0 &&
			val <= Number.MAX_SAFE_INTEGER
		);
	}
	return value != null && hasValidLength(value) && !isFunction(value);
}

module.exports = isPseudoArray;
