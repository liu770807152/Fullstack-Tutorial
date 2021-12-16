function User() {}
User.__proto__.view = function () {
	console.log('b');
};
User.prototype.view = function () {
	console.log('a');
};
/* Now User has view() in both __proto__ and prototype! */
let user = new User();
/* You can see both __proto__ and prototype */
console.dir(User);
/* The instance of User only calls view() from its prototype! */
user.view(); // a

/** 2 ways to inherit */
// 1. use constructor 借用构造函数继承实例属性
function Parent() {}
function Child() {
	parent.call(this);
}
// 2. use prototype 寄生继承原型属性
(function () {
	let Super = function () {};
	Super.prototype = Parent.prototype;
	Child.prototype = new Super();
})();
