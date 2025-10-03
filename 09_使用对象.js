/**
 * 教程地址：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_objects
 */

// 创建对象
// const myCar = {
//     make: "Honda",
//     model: "Accord",
//     year: 1998
// }
// console.log(myCar.make);
// console.log(myCar["model"]);

// 使用构造函数创建对象
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
}

// 为所有对象增加该属性
// Car.prototype.color = null;
//
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }
//
// var myCar = new Car("Honda", "Accord", 1998);
// var myPerson = new Person("小王", 18);
// myCar.owner = myPerson;
// myCar.color = "red";
//
// console.log(myCar);


// 对象中方法的创建
// var myObj = {
//     // 方式一
//     sayHello: function () {
//         console.log("hello world");
//     },
//     // 方式二
//     sayHi() {
//         console.log("hi world");
//     }
// }

// getter和setter
// var o = {
//     a: 10,
//     get b() {
//         return this.a + 1;
//     },
//     set c(x) {
//         this.a = x / 2;
//     }
// }
// console.log(o.a);
// console.log(o.b);
// o.c = 50
// console.log(o.a);

// 删除属性
var myObj = {
    a: 10,
    b: 20
}
console.log(myObj);
delete myObj.a;
console.log(myObj);
