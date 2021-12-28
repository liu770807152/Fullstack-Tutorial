function banKeyboardEvents(event) {
	return (
		!(
			112 === event.keyCode || // ban F1
			123 === event.keyCode || // ban F12
			(event.ctrlKey && 82 === event.keyCode) || // ban ctrl+R
			(event.ctrlKey && 18 === event.keyCode) || // ban ctrl+N
			(event.shiftKey && 121 === event.keyCode) || // ban shift+F10
			(event.altKey && 115 === event.keyCode) || // ban alt+F4
			// ban shift + press <a> tag
			('A' === event.srcElement.tagName && event.shiftKey)
		) || (event.returnValue = false)
	);
}

// in use
document.addEventListener('keydown', banKeyboardEvents);
