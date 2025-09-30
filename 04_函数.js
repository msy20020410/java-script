/**
 * 教程地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions
 */

/**
 * 1. 当函数作为对象的属性时，称之方法
 * 2. 函数提升仅适用于函数声明，不适用于函数表达式
 * 3. 函数的实际参数会被保存在一个类似数组的 arguments 对象中。在函数内可以使用 arguments[i] 获取参数
 */

// 普通的函数定义
// function add(a, b) {
//     return a + b;
// }
//
// console.log(add(3, 2));

// 匿名函数表达式（推荐）
// const square = function (x) {
//     return x * x;
// }
// console.log(square(2));
// 具名函数表达式
// const div = function division(x, y) {
//     console.log(`该函数参数的个数为${arguments.length}`);
//     return x / y;
// }
// console.log(div(10, 2));

//函数是可以作为参数传递的！
// const arr = [2, 8];

// function getResult(arr, square) {
//     for (let val of arr) {
//         console.log(square(val));
//     }
// }
//
// getResult(arr, square);

// 默认参数
// const mul = function (multiplier, ...args) {
//     return args.map(n => n * multiplier);
// }
//
// console.log(mul(5, 1, 2, 3));

// 箭头函数表达式
// const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];
//
// const len = a.map(s => s.length);
// console.log(len);

// 以字符串的方式执行js代码
// eval("console.log('hello world')");



