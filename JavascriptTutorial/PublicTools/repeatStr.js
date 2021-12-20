function repeatStr(str, n) {
	let res = '';
	while (n) {
		if (n % 2 === 1) {
			res += str;
		}
		if (n > 1) {
			str += str;
		}
		n >>= 1;
	}
	return res;
}

module.exports = repeatStr;

// console.log(repeatStr('123', 9));
