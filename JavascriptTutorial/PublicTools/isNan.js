function isNan(v) {
	return !(typeof v === 'string' || typeof v === 'number') || isNaN(v);
}

module.exports = isNan;
