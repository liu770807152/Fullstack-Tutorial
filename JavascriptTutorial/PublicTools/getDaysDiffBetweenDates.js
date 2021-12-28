const getDaysDiffBetweenDates = (start, end) =>
	Math.abs(end - start) / (1000 * 3600 * 24);

module.exports = getDaysDiffBetweenDates;
