// Remember Call Stack
// Execution Context: tells you which lexical environment is currently running

// Global Execution Context
/*
Creation Phase = global, this, window 
"this" => is the object that the function is a property of, gives methods access to their object, execute same code for multiple objects
"Hoisting" = is the behaviour of moving variables or function declaration to the top of their respective environment during compilation phase.
// variables are partially hoisted and function declarations are fully hoisted.
Execution Phase = Run your code 
*/


console.log("Execution Context");
function printName() {
  console.log("ALI");
}
function findName() {
  return printName();
}
function sayName() {
  return findName();
}
sayName();
