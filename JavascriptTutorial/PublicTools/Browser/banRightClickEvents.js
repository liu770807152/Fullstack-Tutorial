function banRightClickEvents() {
	['contextmenu', 'selectstart', 'copy'].forEach((ev) => {
		document.addEventListener(ev, function (event) {
			return (event.returnValue = false);
		});
	});
}

module.exports = banRightClickEvents;
