function dateFormatSwitcher(str, from, to) {
	str += '';
	let Y = '',
		k = '',
		i = -1;
	if (~(Y = from.indexOf('YYYY'))) {
		Y = str.substring(Y, Y + 4);
		to = to.replace(/YYYY|yyyy/g, Y);
	} else if (~(Y = from.indexOf('YY'))) {
		Y = str.substring(Y, Y + 2);
		to = to.replace(/YY|yy/g, Y);
	}
	['M', 'D', 'H', 'h', 'm', 's'].forEach((s) => {
		i = from.indexOf(s + s);
		k = ~i ? str.substring(i, i + 2) : '';
		to = to.replace(s + s, k);
	});
	return to;
}

module.exports = dateFormatSwitcher;

// console.log(dateFormatSwitcher('19700101', 'YYYYMMDD', 'YYYY-MM-DD'));
