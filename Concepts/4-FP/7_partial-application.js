console.log("Partial Application");

const multiply = (a,b,c) => a*b*c;
const partialMulBy5 = multiply.bind(null,5);
console.log(partialMulBy5(5,5));