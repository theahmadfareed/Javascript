console.log("Currying");
// Currying => is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions each with a single arguments.

const mul = (a) => (b) => a*b;
const mulBy5 = mul(5);
console.log(mulBy5(3));




