// arguments和实参的关系
/**
 * 严格模式 & 非严格模式
 * 'use strict'
 * 严格模式：arguments和实参是不会相互影响的
 * 非严格模式：arguments和实参会相互影响！
 */
function side1(arr) {
	// arguments 的变化不会影响abc
	arr[0] = arr[2];
}
// c有初始值，ES6解构，严格模式
function fn1(a, b, c = 3) {
	// c = 1 => c = 10
	c = 10;
	side1(arguments);
	// a:1, b:1, c:10 => 12
	return a + b + c;
}
console.log(fn1(1, 1, 1));

function side2(arr) {
	// arguments 的变化会影响abc
	arr[0] = arr[2];
}
// c无初始值，非严格模式
function fn2(a, b, c) {
	// c = 1 => c = 10
	c = 10;
	side2(arguments);
	// a:10, b:1, c:10 => 21!
	return a + b + c;
}
console.log(fn2(1, 1, 1));
