function extendObj(target, origin) {
	for (const key in origin) {
		target[key] = origin[key];
	}
	return target;
}

module.exports = extendObj;
