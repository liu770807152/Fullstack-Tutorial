/** https://www.qiyuandi.com/zhanzhang/zonghe/10546.html */
const inViewport = (el) => {
	const { top, left, bottom, right } = el.getBoundingClientRect();
	const { clientHeight, clientWidth } = document.documentElement;
	const { innerHeight, innerWidth } = window;
	const height = innerHeight || clientHeight,
		width = innerWidth || clientWidth;
	const efp = function (x, y) {
		return document.elementFromPoint(x, y);
	};
	// Return false if it's not in the viewport
	if (right < 0 || bottom < 0 || left > width || top > height) {
		return false;
	}
	// Return true if any of its four corners are visible
	return (
		el.contains(efp(left, top)) ||
		el.contains(efp(right, top)) ||
		el.contains(efp(right, bottom)) ||
		el.contains(efp(left, bottom))
	);
	// return (bottom >= 0 && right >= 0 && top <= html.height && left <= width);
};

module.exports = inViewport;
