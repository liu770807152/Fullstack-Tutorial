const isStatic = require('./isStaticType');

function isPrimitive(value) {
	return isStatic(value) || typeof value === 'symbol';
}

module.exports = isPrimitive;
