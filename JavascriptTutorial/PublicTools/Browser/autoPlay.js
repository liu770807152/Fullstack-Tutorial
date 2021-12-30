const music = document.querySelector('.video');
let state = 0;
document.addEventListener(
	'touchstart',
	function () {
		if (state === 0) {
			music.play();
			state = 1;
		}
	},
	false
);
document.addEventListener(
	'WeixinJSBridgeReady',
	function () {
		music.play();
	},
	false
);
// 循环播放 loop play
music.onended = function () {
	music.load();
	music.play();
};
