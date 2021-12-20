const isPseudoArray = require('./isPseudoArray'),
	isArray = require('./isArray'),
	isObject = require('./isObject'),
	isPlainObject = require('./isPlainObject');

function isEmpty(value) {
	if (value == null) return true;
	if (isPseudoArray(value) || isArray(value)) {
		return !value.length;
	} else if (isPlainObject(value) || isObject(value)) {
		for (const key in value) {
			if (hasOwnProperty.call(value, key)) {
				return false;
			}
		}
	}
	return true;
}

module.exports = isEmpty;

console.log(isEmpty({}));
console.log(isEmpty([]));
console.log(isEmpty({ a: 1 }));
