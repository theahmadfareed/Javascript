// Each context is linked to its outside context (which gives access to the varibales that are in our parent environment) and this outside context depends on where the function sits lexically.
/*
Context = It is an object based thing, what is the value of "this" keyword, which is a reference to the object that owns that current executing code, context is determined by how the function is invocked with the value of this keyword
Scope = It is a function based thing, it tells us about what is in the variable environment, visibility of the varibales.
*/
"use strict";
console.log("Scope Chain");
// var x = 'x';
// function printName() {
//   console.log(x);
//   var c = "c";
//   return "Ahamd Fareed";
// }
// function findName() {
//   var b = "b";
//   return printName();
// }
// function sayMyName() {
//   var a = "a";
//   return findName();
// }
// sayMyName();

function sayMyName() {
  var a = "a";
  return function findName() {
    var b = "b";
    return function printName() {
      var c = "c";
      console.log(a);
      console.log(b);
      console.log(c);
      console.log("Ahamd Fareed");
    };
  };
}
sayMyName()()();

// Leakage of global variables
function weird() {
  height = 40;
  console.log(height);
}
weird();

// Function Scope (var)
if(5>4){
  var pswd = '12345'
}
console.log(pswd);

// Block Scope (let, const)
if(5>4){
  let pwd = '12345'
  // const pwd = '12345'
}
console.log(pwd);

//
function loop(){
  for (var index = 0; index < 5; index++) {
    console.log(index);
  }
  console.log('final',index);
}
loop();
//
function loop1(){
  for (let index = 0; index < 5; index++) {
    console.log(index);
  }
  console.log('final',index);
}
loop1();

