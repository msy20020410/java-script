/**
 * 教程地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_classes
 */

// 类表达式1
// const MyClass1 = class {
//     constructor(name) {
//         this.name = name;
//     }
//
// }
// 类表达式2
// const MyClass2 = class MyClassName {
//     constructor(name) {
//         this.name = name;
//     }
// }

// 构造函数
// class Color {
//     constructor(r, g, b) {
//         this.values = [r, g, b];
//     }
//
//     get rgb() {
//         return `rgb(${this.values.join(',')})`;
//     }
//
//     getRGB() {
//         return this.rgb;
//     }
// }
//
// const red = new Color(255, 0, 0);
// console.log(red);
// console.log(red.rgb);
// console.log(red.getRGB());

// 私有字段（#号开头的字段）
// class Car {
//     #numDoors = 4;
//
//     constructor(make, model) {
//         this.make = make;
//         this.model = model;
//     }
//
//     getNumDoors() {
//         return this.#numDoors;
//     }
// }

// 公共字段
// class MyClass {
//     luckyNumber = Math.random();
//
//     constructor() {
//         this.negativeNumber = -Math.random();
//     }
// }
//
// console.log(new MyClass().luckyNumber);
// console.log(new MyClass().negativeNumber);

// 静态属性
// class Color {
//     constructor(r, g, b) {
//         this.values = [r, g, b];
//     }
//
//     // 校验rgb
//     static isValidRGB(r, g, b) {
//         return r >= 0 && r <= 255 && g >= 0 && g <= 255 && b >= 0 && b <= 255;
//     }
// }
//
// console.log(Color.isValidRGB(255, 255, 254));   // 类可以访问静态属性
// console.log(new Color(255, 255, 254).isValidRGB);   // 对象不能访问 报undefined


