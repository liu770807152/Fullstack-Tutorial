const isPseudoArray = require('./isPseudoArray'),
	isPlainObject = require('./isPlainObject');

function getKeys(obj) {
	if (obj == null) {
		throw new TypeError('Cannot convert undefined or null to object');
	}
	const result = [];
	if (isPseudoArray(obj) || isPlainObject(obj)) {
		for (const key in obj) {
			obj.hasOwnProperty(key) && result.push(key);
		}
	}
	return result;
}

module.exports = getKeys;

// console.log(
// 	getKeys({
// 		1: 1,
// 		2: 2,
// 	})
// );
