const isArray = require('./isArray'),
	isPseudoArray = require('./isPseudoArray');

function removeDuplicate(arr) {
	if (isArray(arr) || isPseudoArray(arr)) {
		return [...new Set(arr)];
		// return Array.from(new Set(arr));
	}
	return null;
}

module.exports = removeDuplicate;

console.log(removeDuplicate([1, 3, 4, 2, 1, 6, 4, 7, 2]));
