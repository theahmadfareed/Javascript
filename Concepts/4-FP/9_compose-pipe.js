console.log("Compose & Pipe");

// Ramda library = compose()
// Ramda library = Pipe() left-->right
const compose = (f, g) => (num) => f(g(num));
const pipe = (f, g) => (num) => g(f(num));

const mulBy3 = (num)=> num*3;
const takeAbs = (num)=> Math.abs(num);

const mulAndAbsCompose = compose(mulBy3, takeAbs);
const mulAndAbsPipe = compose(takeAbs, mulBy3);
console.log(mulAndAbsCompose(-50));
console.log(mulAndAbsPipe(-50));








