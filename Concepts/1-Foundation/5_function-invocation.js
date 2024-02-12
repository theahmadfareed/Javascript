console.log("Function Invocation")
// Local Execution Context = function invocation
/*
// this, arguments
"this" => is the object that the function is a property of, gives methods access to their object, execute same code for multiple objects
"arguments" => on each execution context, we get arguments object which contains the arguments passed to a function
Variable Environment = variables created inside each execution context are stored in variable environment.
*/

// Function Declarations are fully Hoisted but Function Expressions don't. 

// Function Expression
var canada = () => {
    console.log("Cold");
}

// Function Declaration
function pakistan(){
    console.log("Hot");
}

// Function Invocation/Call/Execution
canada();
pakistan();


// function marry(p1, p2){
function marry(...args){
    console.log(arguments);
    console.log(Array.from(arguments));
    // return `${p1} is now married to ${p2}`;
    console.log(args);
    return `${args[0]} is now married to ${args[1]}`;

}

marry('moosa','rubab');

// Variable Environment
function two(){
    var isValid;
}
function one(){
    var isValid = true;
    two();
}
var isValid = false;
one();