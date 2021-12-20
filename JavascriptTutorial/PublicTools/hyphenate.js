const cached = require('./cached');

// abCdEf => ab-cd-ef
function hyphenate(str) {
	return str.replace(/\B([A-Z])/g, '-$1').toLowerCase();
}

// use memorization
const _hyphenate = cached(hyphenate);

module.exports = hyphenate;

// console.log(_hyphenate('bestCase'));
