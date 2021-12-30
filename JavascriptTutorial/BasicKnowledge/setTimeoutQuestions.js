/**
 * print a number every sec
 */
function solver() {
	for (let i = 0; i < 10; i++) {
		setTimeout(() => {
			console.log(i);
		}, 1000 * i);
	}
}
solver();

/**
 * write MySetInterval(fn, a, b, n),
 * execute fn() every a, a+b, a+2b, a+nb period
 * auto close the timer after n times of execution
 */
function MySetInterval(fn, a, b, n) {
	this.fn = fn;
	this.a = a;
	this.b = b;
	this.n = n;
	this.count = 0;
	this.timeout = null;
}
MySetInterval.prototype.start = function () {
	const time = this.a + this.count * this.b;
	this.timeout = setTimeout(() => {
		this.fn();
		this.count++;
		this.start();
	}, time);
	if (this.count > this.n) {
		console.log('Timer closed.');
		clearTimeout(this.timeout);
	}
};
const fn = () => console.log('123');
new MySetInterval(fn, 1000, 2000, 3).start();
