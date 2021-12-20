function getRawType(value) {
	return Object.prototype.toString.call(value).slice(8, -1);
}

module.exports = getRawType;
