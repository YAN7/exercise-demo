// // 解构数组的各种用法
// const [aa, bb] = [1, 2];
// console.log(aa, bb);


// let [a, [[b], c]] = [1, [[2], 3]];
// console.log(a, b, c);

// let [, , d] = [1, 2, 3];
// console.log(d);

// let [e, ...tail] = [1, 2, 3, 4, 5];
// console.log(e, tail);

// let [f, g] = [1];
// console.log(f, g);

// // 设置默认值
// const [x = 1, y = 2] = [];
// console.log(x, y);

// // 只有数组成员严格等于(===)undefined的时候,默认值才会生效
// const [x1 = 1, y1 = 2] = [undefined, null];
// console.log(x1, y1);

// // 设置默认值的时候可以先取变量,但是该变量需要已声明并赋值
// const [x2 = 1, y2 = x2] = [];
// console.log(x2, y2);

// const [x3, y3 = x3] = [1];
// console.log(x3, y3);

// const [x4, y4 = x4] = [];
// console.log(x4, y4);

// // const [x5 = y5, y5 = 1] = [];
// // console.log(x5, y5);

// let x6;
// const [y6 = x6] = [];
// console.log(y6);

/* 
* 对象的解构赋值
*/

// // 对象的解构是根据键名来解构的,只要键名相同,那么就能解构到对应的键值
// const { foo1, bar1 } = { bar1: 123, foo1: 456 };
// console.log(foo1, bar1);

// // 对象的解构其实是`{a:a} = {a:123}`的简写，被解构的是后者，前者只是一个标识符，用来找到要解构的变量。
// const { a: b } = { a: 123 };
// // console.log(a);
// console.log(b);

// 解构赋值嵌套

// const a = {
//   b: 123,
//   c: {
//     d: {
//       e: 456,
//       f: [1, 2, { g: 789 }]
//     }
//   }
// }

// const { b, c, c: { d, d: { f, f: [x, y, { g }] } } } = a;
// console.log(b, c, d, f, x, y, g);

// 对象解构的默认值

const { a = 123 } = {}; // 123
const { a1 = 123, b1 = 456 } = { a1: undefined, b1: null };
console.log(a1, b1);