window.onload = function () {
	setTimeout(function () {
		const t = performance.timing;
		console.log(
			'DNS search time duration: ' +
				(t.domainLookupEnd - t.domainLookupStart).toFixed(0)
		);
		console.log(
			'TCP connection time duration: ' +
				(t.connectEnd - t.connectStart).toFixed(0)
		);
		console.log(
			'response time duration: ' + (t.responseEnd - t.responseStart).toFixed(0)
		);
		console.log(
			'DOM parsing time duration: ' +
				(t.domComplete - t.domInteractive).toFixed(0)
		);
		console.log(
			'White screen time duration: ' +
				(t.responseStart - t.navigationStart).toFixed(0)
		);
		console.log(
			'DOM ready time duration: ' +
				(t.domContentLoadedEventEnd - t.navigationStart).toFixed(0)
		);
		console.log(
			'onload time duration: ' + (t.loadEventEnd - t.navigationStart).toFixed(0)
		);
		if ((t = performance.memory)) {
			console.log(
				'js memory usage is: ' +
					((t.usedJSHeapSize / t.totalJSHeapSize) * 100).toFixed(2) +
					'%'
			);
		}
	});
};
