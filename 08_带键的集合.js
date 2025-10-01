/**
 * 教程地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Keyed_collections
 */

// map
// const info = new Map();
// info.set('name', '张三');
// info.set('age', 18);
// info.set('height', 1.88);
//
// for (let [k, v] of info) {
//     console.log(`${k} is ${v}`);
// }


// set
const set = new Set();
set.add('name');
set.add('age');
set.add('height');
set.add('name');
//
// for (let item of set) {
//     console.log(item);
// }
// console.log(set.has('name'));
// console.log(set.has(8));
// console.log(set.size);

// 数组set的转换
const arr = Array.from(set);
console.log(arr);
