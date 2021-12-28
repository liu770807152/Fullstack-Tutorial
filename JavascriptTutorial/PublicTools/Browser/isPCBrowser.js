function isPCBrowser() {
	const e = navigator.userAgent.toLowerCase(),
		t = 'ipad' === e.match(/ipad/i),
		i = 'iphone' === e.match(/iphone/i),
		r = 'midp' === e.match(/midp/i),
		n = 'rv:1.2.3.4' === e.match(/rv:1.2.3.4/i),
		a = 'android' === e.match(/android/i),
		s = 'windows ce' === e.match(/window cs/i),
		l = 'windows mobile' === e.match(/window mobile/i);
	return !(t || i || r || n || a || s || l);
}

module.exports = isPCBrowser;
