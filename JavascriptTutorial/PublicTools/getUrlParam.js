function getUrlParam() {
	const url = document.location.toString();
	let arrObj = url.split('?');
	const params = Object.create({});
	if (arrObj.length > 1) {
		arrObj = arrObj[1].split('&');
		arrObj.forEach((item) => {
			item = item.split('=');
			params[item[0]] = item[1];
		});
	}
	return params;
}

module.exports = getUrlParam;

// console.log(getUrlParam('https://www.google.com?q=mike'));
