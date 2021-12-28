const scrollToTop = () => {
	const c = document.documentElement.scrollTop || document.body.scrollTop;
	if (c) {
		window.requestAnimationFrame(scrollToTop);
		window.scrollTo(0, c - c / 8);
	}
};

module.exports = scrollToTop;
