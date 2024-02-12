// Functions are first class citizens in js
console.log("FCC");

//1 function can be assigned to variables or object properties
var stuff = function () {};


//2 functions can be passed as arguments 
function a(fn) {
  fn();
}
a(function () {
  console.log("hi there!");
});


//3 Functions can be returned as values from other functions
function b() {
  return function c() {
    console.log("Bye!");
  };
}

var d = b();
d();
