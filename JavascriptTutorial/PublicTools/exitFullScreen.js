function exitFullScreen() {
	const el = parent.body;
	el.webkitCancelFullScreen
		? el.webkitCancelFullScreen()
		: el.mozCancelFullScreen
		? el.mozCancelFullScreen()
		: el.msCancelFullScreen
		? el.msCancelFullScreen()
		: el.cancelFullScreen
		? el.cancelFullScreen()
		: el.exitFullScreen
		? el.exitFullScreen()
		: alert('Exit full screen fail! Please try to use Esc.');
}

module.exports = exitFullScreen;
