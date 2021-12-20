function capitalize(str) {
	if (str != undefined && str.length > 0) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}
	return '';
}

module.exports = capitalize;
