// component communication: a process of emit and listen  组件通信：一个触发与监听的过程
class EventEmitter {
	constructor() {
		// store event
		this.events = this.events || new Map();
	}
	// listen to the events
	addListener(type, fn) {
		if (!this.events.get(type)) {
			this.events.set(type, fn);
		}
	}
	// emit the events
	emit(type) {
		let handle = this.events.get(type);
		handle.apply(this, [...arguments].slice(1));
	}
}

// test
let emitter = new EventEmitter();
// listen to events
emitter.addListener('ages', (age) => {
	console.log(age);
});
// emit events
emitter.emit('ages', 18);
