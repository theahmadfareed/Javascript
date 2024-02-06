// Global Execution Context
/*
Creation Phase = global, this, window 
"this" => is the object that the function is a property of
"Hoisting" = is the behaviour of moving variables or function declaration to the top of their respective environment durying compilation phase.
// variables declaration are partially hoisted and function declarations are fully hoisted.
Execution Phase = Run your code 
*/

console.log("Hoisting");
console.log("Variable Declaration is partly hoisted = ", pet);
console.log("Function Declaration is fully hoisted = ", sing());
console.log("Function Expression is partly hoisted = ", singSong);
console.log(singSong());

// Variable Declaration
var pet = "dog";
// let pet = "dog";
// const pet = "dog";

// Function Declaration
function sing() {
  return "Wao Wao....!";
}

// Function Expression
// var singSong = function () {
var singSong = () => {
  return "Wao Wao....!";
};
// console.log(singSong());


