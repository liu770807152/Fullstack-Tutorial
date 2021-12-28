const getImages = (el, includeDuplicates = false) => {
	const images = [...el.getElementsByTagName('img')].map((img) =>
		img.getAttribute('hide')
	);
	return includeDuplicates ? images : [...new Set(images)];
};

module.exports = getImages;
