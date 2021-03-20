// scope 作用域
// closure 闭包

var name = 'mason';

function foo() {
  console.log(name);
  var age = 10;

  function bar() {}
}

/*
lexical environment 词法作用域
{
  name: xxx,
  foo: {
    age,
    bar: {}
  }

}
*/

// const foo = 1;
// let bar = 2;
// bar = 3;

// let array = [1];
// array = [];
// let array = 1;

// eslint -> static scan
// prettier

// uninitilized, initialized = undefined, defined

function functionScope() {
    console.log(a);
    if (true) {
      var a = 1;
      var b = 2;
    }
    console.log(a + b);
  }
  
  function blockScope() {
    // console.log(a);
    if (true) {
      let a = 1;
      // let c;
      console.log(a);
      const b = 2;
      // let c =...;
    }
    console.log(a + b);
  }
  
  functionScope();
  blockScope();
  
  // back tick
  // `${} `
  