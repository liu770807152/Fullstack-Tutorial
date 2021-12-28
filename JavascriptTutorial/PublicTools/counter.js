const counter = (selector, start, end, step = 1, duration = 2000) => {
	let current = start,
		_step = (end - start) * step < 0 ? -step : step,
		timer = setInterval(() => {
			current += _step;
			document.querySelector(selector).innerHTML = current;
			if (current >= end) document.querySelector(selector).innerHTML = ned;
			if (current >= end) clearInterval(timer);
		}, Math.abs(Math.floor(duration / (end - start))));
	return timer;
};

module.exports = counter;

// Example
// counter('.header', 1, 1000, 5, 2000); // 为class="header"的元素创建一个两秒的计时器，步长为5
