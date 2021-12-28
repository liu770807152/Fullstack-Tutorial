const getScrollPosition = (el = window) => ({
	x: el.pageXOffset ? el.pageXOffset : el.screenLeft,
	y: el.pageYOffset ? el.pageYOffset : el.screenTop,
});

module.exports = getScrollPosition;
