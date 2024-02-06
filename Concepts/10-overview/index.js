// // DOM Manipulation.
// let button = document.getElementById("click");
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");
// let in1 = document.getElementById("in1");
// let in2 = document.getElementById("in2");
// let body = document.querySelector("body");
// let css = document.querySelector("h3");
// let title = document.querySelector("h1");
// let grid = document.getElementById("grad");

// //
// title.style.background = "yellow";
// title.className = "titleFont";
// title.classList.add("titleBold");
// title.classList.remove("titleFont");
// title.classList.toggle("titleFont");

// //
// console.log(grid.innerHTML);
// console.log(grid.parentElement);
// console.log(grid.childElementCount);

// //
// function changeColor() {
//   body.style.background =
//     "linear-gradient(to right, " + in1.value + "," + in2.value + ")";
//   css.textContent = body.style.background + ";";
// }

// //Common Function used as condition
// function checkLength() {
//   return input.value.length;
// }

// //Response to Event
// function createListElement() {
//   let li = document.createElement("li");
//   li.appendChild(document.createTextNode(` ${input.value}`));
//   ul.appendChild(li);
//   input.value = "";
// }

// //
// function clickCreateList() {
//   if (checkLength() > 0) {
//     createListElement();
//   }
// }

// //
// function enterCreateList(event) {
//   if (checkLength() > 0 && event.code === "Enter") {
//     createListElement();
//   }
// }

// // Adding Mouse Event Listener
// button.addEventListener("click", clickCreateList);

// // Adding Keyboard Event Listener
// input.addEventListener("keypress", enterCreateList);

// //
// in1.addEventListener("input", changeColor);
// in2.addEventListener("input", changeColor);

// //  Advanced Loops
// /*
// // Simple for loop
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// // foreach loop
// arr.forEach(function (array, i) {
//     console.log(array, i);
// })

// // for of loop(arrays,strings)
// for (let num of arr) {
//     console.log(arr[num]);
// }

// // for in loop(objects)
// for (let arrKey in arr) {
//     console.log(arrKey);
// }

// // do while loop
// let t = 0;
// do {
//     console.log("Hello");
//     t++;
// } while (t < 10);

// // while loop
// let t = 5;
// while (t > 0) {
//     console.log("Hello");
//     t--;
// }
// */

// //  Advanced Arrays
// /*
// // forEach
// let arr = [1, 2, 3, 4, 5];
// const arr1 = [];
// arr.forEach((num) => {
//     arr1.push(2 * num);
// })
// console.log(arr1);
// // map()
// const arr2 = arr.map(num => 2 * num);
// console.log(arr2);

// // filter()
// const arr3 = arr.filter(num => {
//     return num > 3;
// });
// console.log(arr3);

// // reduce()
// const arr4 = arr.reduce((acc, no) => {
//     return acc + no;
// },0);
// console.log(arr4);
// */

// //  Advanced Functions
// /*
// //Default Arguments & Arrow Functions
// const fun = (a = 5, b = 5) => {
//     // console.log(a * b);
// }
// fun();
// fun(3, 3);

// //Closure
// const func = () => {
//     const vg = "Ali";
//     const func1 = () => {
//         alert(vg);
//     }
//     return func1();
// }
// func();

// //Currying
// const multiple = (a) => (b) => {
//     // console.log(a * b);
// }
// multiple(3)(3);
// const m = multiple(5);
// m(6);

// //Compose
// const compose = (f, g) => (a) => f(g(a));
// const sum = (num) => num + 1;
// compose(sum, sum)(5);
// */

// //  Advanced Objects.
// /*
// // OBJECT
// let user = {
//     name: "ali",
//     age: 29,
//     email: "a@gmail.com",
//     skills: ["A", "B"],
//     address: {street: "A", house: 151},
//     shout: function () {
//         console.log("From object");
//     }
// };

// // LIST
// let list = [user, 1, 1.5, "Ali", 'A', null, NaN, true, function wao() {
//     console.log("Mixed Function.")
// }];
// console.log(list);

// // Ternary Operator
// let ans = (1 > 5) ? "1" : "5";
// console.log(ans);

// // Optional Chaining Operator
// let ooo = {
//     address: {
//         street: "B",
//         house: 795,
//     }
// }
// let un = ooo?.address?.city;
// console.log(un);

// // Nullish Coalescing Operator
// let nu = ooo?.address?.city ?? "no city mentioned";
// console.log(nu);
// let oz = {
//     name: "A",
//     age: 98,
// }
// let l = Object.values(oz).forEach((v) => {
//     console.log(v);
// })

// let ll = Object.entries(oz).forEach((v) => {
//     console.log(v);
// })

// let lll = Object.keys(oz).forEach((k, i) => {
//     console.log(k, oz[i]);
// })

// // Destructuring
// const obj = {
//     name: "Ali",
//     age: 29
// }
// const {name, age} = obj;
// console.log(`My name is ${name}`);

// // Objects Types
// const obj1 = {
//     [name]: "My name",
//     [age]: "My age"
// }
// console.log(obj1);
// const obj2 = {
//     [1 + 2]: "Ali",
//     ["My" + "age"]: 29
// }
// console.log(obj2);
// let g;
// let b;
// let c;
// const obj3 = {
//     g,
//     b,
//     c
// }

// //Reference type
// let o1 = {value: 10};
// let o2 = o1;
// let o3 = {value: 10};
// console.log(o1 === o2);
// console.log(o1 === o3);

// //Context & Instantiation
// class Player {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     displayInfo() {
//         console.log(`Name is ${this.name} and age is ${this.age}`);
//     }
// }

// class demo extends Player {
//     constructor(name, age) {
//         super(name, age);
//     }
// }

// let d1 = new demo("Ali", 25);
// let d2 = new demo("mosa", 22);
// d1.displayInfo();
// d2.displayInfo();
// */

// //  PassByValue & PassByReference
// /*
// //Primitive types = PassByValue;
// let a = 5;
// let b = a;
// b++;
// console.log(a);
// console.log(b);
// //Objects types= PassByReference;
// let x = {name: "Ali"};
// let y = x;
// y.name = "Mosa";
// console.log(x);
// console.log(y);
// //
// let c = [1, 2, 3, 4, 5];
// let v = [].concat(c);
// v.push(6);
// console.log(c);
// console.log(v);
// //
// let zz = {a: 'a', b: 'b', c: 'c'};
// let xx = Object.assign({}, zz);
// zz.c = 5;
// console.log(zz);
// console.log(xx);
// //Shallow Cloning
// let cc = {...zz};
// console.log(cc);
// //Deep Cloning
// let vv = JSON.parse(JSON.stringify(xx));
// console.log(vv);
// */

// //  Modules
// /*
// // 1: Inline Script (JS within the HTML file using 'script' tag)
// <script>
//     let button = document.getElementById("click");
//     let input = document.querySelector("input");
//     let ul = document.querySelector("ul");
// </script>.

// // 2: Script Tags (use external JS files)
// <script src="/frontend/javaScript/index.js"></script>.

// // 3: IIFE
// let myApp = {}
// (function () {
//     myApp.add = function (a, b) {
//         return a + b;
//     }
// })();

// // 4: Browserify+CommonJS

// //exports & require
// // js1
// module.exports = function add(a, b) {
//     return a + b;
// }
// // js2
// let add = require("./add");


// // 5: ES6+Webpack2
// //Export & Import
// //js1
// export const mul = (a, b) => a * b;
// export default function add(){
//     return a+b;
// }
// //js2
// import { add } from "./add";
// import add from "./add";
// */

// /// Callbacks
// movePlayer(100, "Left", function () {
//   movePlayer(200, "Right", function () {
//     movePlayer(100, "Left", function () {
//       movePlayer(100, "Left", function () {});
//     });
//   });
// });
// /// Promise
// movePlayer(100, "Right")
//   .then(() => movePlayer(400, "Left"))
//   .then(() => movePlayer(40, "Right"))
//   .then(() => movePlayer(10, "Left"));
// /// Async-await
// async function movePlayer() {
//   const first = await movePlayer(400, "Left");
//   const second = await movePlayer(300, "Left");
//   const third = await movePlayer(200, "Right");
//   const forth = await movePlayer(100, "Left");
// }
// /// Promises & Async-Await
// /*
// /// Promises
// const promise = new Promise((resolve, reject) => {
//     if (true) {
//       resolve("Stuff Worked");
//     } else {
//       reject("Error, it Broke");
//     }
//   });
//   promise
//     .then((result) => result + "!")
//     .then((result1) => result1 + "?")
//     .then((result2) => result2 + "<")
//     .then((result3) => result3 + ">")
//     .catch(() => console.log("Errrorr!"));
  
  
//   ///
//   const prom1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Hello");
//   });
//   const prom2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Hafiz");
//   });
//   const prom3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Muhammad");
//   });
//   const prom4 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, "Ahmad");
//   });
//   const prom5 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, "Fareed");
//   });
  
//   Promise.allSettled([prom1, prom2, prom3, prom4, prom5])
//     .then((values) => {
//       console.log(values);
//     })
//     .catch((e) => console.log("Some Error" + e));
  
//   // Promise.all([prom1, prom2, prom3, prom4, prom5])
//   //   .then((values) => {
//   //     console.log(values);
//   //   })
//   //   .catch((e) => console.log("Some Error" + e));
  
  
//   ///
//   const urls = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
//   ];
  
//   setTimeout(() => {
//     Promise.all(
//       urls.map((url) => {
//         return fetch(url).then((resp) => resp.json());
//       })
//     )
//       .then((results) => {
//         console.log(results[0]);
//         console.log(results[1]);
//         console.log(results[2]);
//       })
//       .catch(() => console.log("Error"));
//   }, 5000); // delay of 5 seconds
  
  
//   ///
//   const urls1 = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
//   ];
  
//   Promise.all(
//     urls1.map(async (url) => {
//       const resp = await fetch(url);
//       return await resp.json();
//     })
//   )
//     .then((results) => {
//       console.log(results[0]);
//       console.log(results[1]);
//       console.log(results[2]);
//     })
//     .catch(() => console.log("Error"));
  
//   ///
//   const urls2 = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
//   ];
  
//   const getData2 = async function () {
//     const [users, posts, albums] = await Promise.all(
//       urls2.map((url) => fetch(url).then((resp) => resp.json()))
//     );
//     console.log(users);
//     console.log(posts);
//     console.log(albums);
//   };
//   getData2();
  
//   ///
//   const urls3 = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
//   ];
  
//   const getData3 = async function () {
//     try {
//       const [users, posts, albums] = await Promise.all(
//         urls3.map((url) => fetch(url).then((resp) => resp.json()))
//       );
//       console.log(users);
//       console.log(posts);
//       console.log(albums);
//     } catch (error) {
//       console.log("oops" + error);
//     }
//   };
//   getData3();
  
//   ///
//   const urls4 = [
//     "https://jsonplaceholder.typicode.com/users",
//     "https://jsonplaceholder.typicode.com/posts",
//     "https://jsonplaceholder.typicode.com/albums",
//   ];
  
//   const getData4 = async function () {
//     const arrayOfPromises = urls4.map((url) => fetch(url));
//     for await (let request of arrayOfPromises) {
//       const data = await request.json();
//       console.log(data);
//     }
//   };
//   getData4();
//   */

// /// ES 5,6,7,8,9,10,20,21,22
// /*
// // ES5 & ES6
// let var1 = 5;
// const var2 = 5;

// // ES7
// //includes
// let str = "Hello my friend Mosa";
// console.log(str.includes("Ali"));
// // Exponential Operator
// const sq = (a) => a ** 2;
// const cu = (a) => a ** 3;

// // ES8
// let str1 = "    Turtle    ";
// console.log("Padding Start" + str1.padStart(10));
// console.log("Padding End" + str1.padEnd(10));

// // ES10
// let arr = [[1], 2, 3, [[4, [5, 6]]], 7];
// console.log(arr.flat(2));
// console.log(arr.flatMap(val => val));
// console.log("Trim Start" + str1.trimStart());
// console.log("Trim End" + str1.trimEnd());

// let op = [["A", 1], ["B", 2], ["C", 3]];
// console.log(Object.fromEntries(op));

// // ES2020
// let j = 78676897987239872983982398n;
// console.log(typeof (j));

// // ES2021
// let sy = "Hello Ali";
// console.log(sy.replaceAll("l", "p"));

// // ES2022
// console.log(sy.at(-1));
// */
