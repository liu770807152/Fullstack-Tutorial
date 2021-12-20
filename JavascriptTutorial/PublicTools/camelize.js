const cached = require('./cached');

// ab-cd-ef => abCdEf
function camelize(str) {
	return str.replace(/-(\w)/g, function (_, c) {
		return c ? c.toUpperCase() : '';
	});
}

// use memorization
const _camelize = cached(camelize);

module.exports = camelize;

// console.log(_camelize('best-case'));
