// How JS Work?

// JS Code -> JS Engine(V8) -> Browser / Machine
/*
JS Engine(V8)
{
  Call Stack [] => place to keep track of where we are in the code
  // Stack Overflow => when call stack size exceeded, recursion is the common way to do stack overflow
  Memory Heap [] => place to store and write information
  // Garbage Collection => Mark-Sweep 
  // Memory Leak => when memory heap size exceeded, global variables, event listeners, setInterval()
  
  Parser => Lexical Analysis (tokens)
  AST => Abstract Syntax Tree
  Interpreter / Ignition => read the code, run the code
  Bytecode => interpreter produces bytecode (low level code but not as low level as machine code)
  Profiler / Monitor => tells how we can optimize the code
  JIT Compiler / Turbo Fan => read the code, understands it, convert the code into another language (machine code), produces optimized code
  Optimized Code => mixture of byte code and machine code
  // Optimized Code => don't use these things in your code [eval(), arguments, for in, with, delete, hidden classes, inline caching]
} 
*/
console.log("Javascript Engine");
function jsEngine(code) {
  return code.split(/\s+/);
}
console.log(jsEngine("let a = 5"));

// Single Threaded => only 1 set of instruction is executed at a time (1-call-stack means single threaded, Synchronous)
// Javascript Runtime => for Asynchronous [V8, Call Stack, Memory Heap, Web API[DOM, fetch(), setTimeout()], Event Loop, Callback Queue]
// Node.js => Javascript Runtime
