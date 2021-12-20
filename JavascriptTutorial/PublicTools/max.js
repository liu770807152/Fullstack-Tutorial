const isNan = require('./isNan');

// get the maximum among numbers that are not NaN
function max(arr) {
	arr = arr.filter((item) => !isNan(item));
	return arr.length ? Math.max.apply(null, arr) : undefined;
}

module.exports = max;
