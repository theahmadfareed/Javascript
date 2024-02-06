console.log("Functions are Objects!");

//Named Functions
function sayHello() {
  console.log("Hello Named Function!");
}
//Named Functions
sayHello();
// sayHello.call();


//Anonymous Functions
let helloWorld = function () {
  console.log("Hello Anonymous Function!");
};
//Anonymous Functions
helloWorld();


const sayhello = {
  //Anonymous Functions
  one: function () {
    console.log("One!");
  },
  //new ES6 version
  two() {
    console.log("Hello Method!");
  },
};
//Method
sayhello.two();


//Function Constructor
const sayHelo = new Function(console.log("Hello Function Constructor!"));
const sayHelo1 = new Function('num','return num');
//Function Constructor
sayHelo();
console.log(sayHelo1(5));


//Arrow Functions
const sayHeelo = () => {
  console.log("Hello Arrow Function!");
};
sayHeelo();


//IIFE
(function () {
  console.log("Hello from IIFE!");
})();
