const isPseudoArray = require('./isPseudoArray'),
	isPlainObject = require('./isPlainObject');

function getValues(obj) {
	if (obj == null) {
		throw new TypeError('Cannot convert undefined or null to object');
	}
	const result = [];
	if (isPseudoArray(obj) || isPlainObject(obj)) {
		for (const key in obj) {
			obj.hasOwnProperty(key) && result.push(obj[key]);
		}
	}
	return result;
}

module.exports = getValues;
