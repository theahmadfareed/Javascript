// Execution Context: tells you which lexical environment is currently running
// Lexical Environment = In your js file where that code is written
/*
lexical scope(available data + variables) => tells you about available variables
dynamic scope => where the function is called
*/


console.log("Lexical Environment");
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
