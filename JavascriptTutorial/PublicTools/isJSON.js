const isJSON = (str) => {
	if (Object.prototype.toString.call(str) === '[object String]') {
		try {
			const obj = JSON.parse(str);
			if (Object.prototype.toString.call(obj) === '[object Object]' && obj)
				return true;
			else return false;
		} catch (err) {
			return false;
		}
	} else return false;
};
module.exports = isJSON;
