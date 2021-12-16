/** follow the prototype chain to find a possible match */
function myInstanceof(target, origin) {
	while (target) {
		if (target.__proto__ === origin.prototype) {
			return true;
		}
		target = target.__proto__;
	}
	return false;
}
