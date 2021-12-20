// find the first element that satisfies the function
function findElementInArray(arr, fn) {
	let result;
	arr.some((cur, index, arr) => {
		return fn(cur, index, arr) ? ((result = cur), true) : false;
	});
	return result;
}

module.exports = findElementInArray;

console.log(findElementInArray([2, 3, 1], (item, index) => item % 2));
