const triggerEvent = (el, eventType, detail) =>
	el.dispatchEvent(new CustomEvent(eventType, { detail }));

module.exports = triggerEvent;

// Examples
// triggerEvent(document.querySelector('header'), 'click', { hidden: false });
