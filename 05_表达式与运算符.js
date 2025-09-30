/**
 * 教程地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Expressions_and_operators
 */

const ARR = [1, 'HAHA', (s) => s.length];

// 解构
// const arr = ['haha', 'mm', 'jj'];
// const [a, b, c] = arr;
// console.log(a, b, c);

// 比较运算符
// console.log(1 == '1');

// 字符串运算符
// console.log('my name is' + '张三');
// console.log('my name is', '李四');

// delete运算符
// const arr = [1, 2, 3];
// const person = {
//     name: '张三',
//     age: 18
// }
// console.log(delete arr[1]);
// console.log(delete person.age);
// console.log(arr);
// console.log(person);

// typeof操作符
// console.log(typeof 'haha');

// 关系运算符
console.log(1 in ARR);
console.log(4 in ARR);

const theDay = new Date(2019, 11, 1);
console.log(theDay instanceof Date);




