/** Use setTimeout to imitate setInterval */
setTimeout(function () {
	// do something
	setTimeout(arguments.callee, 500);
}, 500);
