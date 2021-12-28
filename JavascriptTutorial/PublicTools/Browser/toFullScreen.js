function toFullScreen() {
	const el = document.body;
	el.webkitRequestFullScreen
		? el.webkitRequestFullScreen()
		: el.mozRequestFullScreen
		? el.mozRequestFullScreen()
		: el.msRequestFullScreen
		? el.msRequestFullScreen()
		: el.requestFullscreen
		? el.requestFullscreen()
		: alert('Browser does not support full screen!');
}

module.exports = toFullScreen;
