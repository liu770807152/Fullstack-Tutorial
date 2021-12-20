function random(lower, upper) {
	lower = +lower || 0;
	upper = +upper || 0;
	return (
		Math.random() * Math.abs(upper - lower) + (lower < upper ? lower : upper)
	);
}

module.exports = random;

// console.log(random(3, 1));
