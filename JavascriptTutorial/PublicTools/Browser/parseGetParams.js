module.exports = function parseGetParams() {
	const query = {};
	location.search.replace(
		/([^?&=]+)=([^&]+)/g,
		(_, key, value) => (query[key] = value)
	);
	// console.log(query);
};
