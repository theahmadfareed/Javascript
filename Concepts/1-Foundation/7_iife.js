console.log("IIFE");
var script = (function () {
  function a() {
    console.log("5");
  }

  function b() {
    console.log("10");
  }
  // a();
  // b();
  return {
    a: a,
    b: b,
  };
})();
script.a();
script.b();


// Named IIFE
(function chai(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();

// Normal IIFE
( () => {
  console.log(`DB CONNECTED TWO ${name}`);
} )();


( (name) => {
  console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')


