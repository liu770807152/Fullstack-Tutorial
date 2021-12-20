// tell if a function is native to the browser
function isNativeFunc(value) {
	return typeof value === 'function' && /native code/.test(value.toString());
}

module.exports = isNativeFunc;
