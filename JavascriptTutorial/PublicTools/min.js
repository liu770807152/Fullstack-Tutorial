const isNan = require('./isNan');

// get the minimum among numbers that are not NaN
function min(arr) {
	arr = arr.filter((item) => !isNan(item));
	return arr.length ? Math.min.apply(null, arr) : undefined;
}

module.exports = min;
