function waitOneSec(val) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			console.log(val);
			resolve();
		}, 1000);
	});
}
// 运用async/await将异步代码写成同步代码的样子，还能保证有序性
(async function() {
	for (let i = 0; i < 3; i++) {
		await waitOneSec(i);
	}
})();