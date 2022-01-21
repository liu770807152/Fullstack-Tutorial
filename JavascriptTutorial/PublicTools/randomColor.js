function getRandomColor1() {
	return (
		'#' +
		Math.floor(Math.random() * 0xffffff)
			.toString(16)
			.padStart(6, '0')
	);
}

function getRandomColor2() {
	return new Array(4).fill('#').reduce((prev) => {
		return (
			prev +
			Math.floor(Math.random() * 256)
				.toString(16)
				.padStart(2, 0)
		);
	});
}

function getRandomColor3() {
	return new Array(7).fill('#').reduce((prev) => {
		return prev + '0123456789abcdef'[Math.floor(Math.random() * 16)];
	});
}

module.exports = {
	getRandomColor1,
	getRandomColor2,
	getRandomColor3,
};
