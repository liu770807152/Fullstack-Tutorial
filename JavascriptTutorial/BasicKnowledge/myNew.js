function Person(name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.sayHi = function () {
	console.log('Hi! I am ' + this.name);
};
new Person('Mike', 18).sayHi();

/** My version of new */
function create() {
	const obj = {};
	// get constructor
	// 将arguments对象提出来，转化为数组，因为arguments是类数组。arguments第一个参数是构造函数！
	const arg = [...arguments],
		fn = arg.shift();
	obj.__proto__ = fn.prototype;
	let res = fn.apply(obj, arg);
	return typeof res === 'object' ? res : obj;
	j;
}
const p = create(Person, 'Lee', 19);
p.sayHi();
