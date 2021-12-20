function dateFormater(formater, t) {
	let date = t ? new Date(t) : new Date(),
		Y = date.getFullYear() + '',
		M = date.getMonth() + 1,
		D = date.getDate(),
		H = date.getHours(),
		m = date.getMinutes(),
		s = date.getSeconds();
	return formater
		.replace(/YYYY|yyyy/g, Y)
		.replace(/YY|yy/g, Y.substring(2, 4))
		.replace(/MM/g, (M < 10 ? '0' : '') + M)
		.replace(/DD/g, (D < 10 ? '0' : '') + D)
		.replace(/HH|hh/g, (H < 10 ? '0' : '') + H)
		.replace(/mm/g, (m < 10 ? '0' : '') + m)
		.replace(/ss/g, (s < 10 ? '0' : '') + s);
}

module.exports = dateFormater;

// console.log(dateFormater('YYYY-MM-DD HH:mm'));
