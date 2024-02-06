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
