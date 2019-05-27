let arr = [];
for (let i = 0; i < 5; i++) {
  arr[i] = function () {
    console.log(i);
  }
}

<<<<<<< HEAD
=======
console.log(123);

>>>>>>> 1fb1f3f... :tada: 完成第二章
// arr[2](); // 2 如果换成2，则输出5


for (let i = 0; i < 3; i++) {
  let i = "abc";
  console.log(i);
}

// 暂时性死区
if (true) {
  // 暂时性死区（tdz）开始 
  temp = 123;
  let temp;
  // 暂时性死区（tdz）结束
}
var a = 123;
const f = () => {
  console.log(a);
  if (false) {
    var a = 456;
  }
}
f();

// 块级作用域
// 获取局部变量
// ES5
(function () {
  var temp = '';
})()
// ES6
{
  let temp = '';
}

// const 对于复合类型的数据（obj，array）保证的是这个变量的指针不变，对于这个变量你可以随便增删数据，但是不能改变指针
const a = {};
a.haha = 123; // 成功
a.lala = 456; //成功
a = { haha: 123 }; // 失败

// 获取顶级对象
//  方法1
let globalObj = (typeof window !== 'undefined') ? window :
  (typeof global !== 'undefined' &&
    typeof process === 'object' &&
    typeof require === 'function'
  ) ? global
    : this;

// 方法2
const getGlobal = () => {
  if (typeof self !== 'undefined') { return self };
  if (typeof window !== 'undefined') { return window };
  if (typeof global !== 'undefined') { return global };
  throw new Error('can\' get this');
} 
