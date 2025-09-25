// 单行注释

/**
 * 多行注释
 * 教程地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Grammar_and_types
 */

// 变量声明
// var name = '张三';
// let age = 18;
// const height = 1.88;

// 允许的命名
// let _name = 'lisi';
// let $name = 'wangwu';

// 解构表达式
// let person = {
//     __name: 'wangwu',
//     __age: 11
// }
// let {__name, __age} = person;
// console.log(__name, __age);

// 循环打印
// for (let i = 0; i < 10; i++) {
//     if (Math.random() > 0.5) {
//         console.log('哈哈');
//     }
// }

// var 不受块作用域限制，即声明的位置限制
// if (true) {
//     var x = '呵呵';
// }
// console.log(x);

// const不允许重新赋值，但允许修改对象属性
// const person = {
//     name: '张三',
//     age: 18
// }
// person.name = 'lisi';
// person.age = 11;
// console.log(person);

// 类型转换
// console.log(parseInt('1001', 2));

// 字面量
// const names = ['zs', 'ls', 'ww'];
// const carName = '宝马';
// console.log(`这是一辆${carName}车!`);

// 对象属性的访问
// const person = {
//     name: {
//         firstName: '张',
//         lastName: '三'
//     },
//     age: 18
// }
// console.log(person.name.firstName)
// console.log(person.name['lastName'])

// 模板字面量
// const name = '张三';
// const age = 18;
// const msg = `
// 我的名字叫:${name},
// 我今年${age}岁了！`
// console.log(msg)

// 引号转义
// const msg = '这是一个需要\"引号转义\"的字符串！';
// console.log(msg);

// 反斜杠转义
// const msg = "这是\
// 一行\
// 文字！";
// console.log(msg);




