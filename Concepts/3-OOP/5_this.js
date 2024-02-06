console.log("this-4 ways");

// new binding this (dynamic scope)
// Constructor Functions (new)
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person('ali', 30);
console.log(p1);


// Implicit binding (dynamic scope)
const p2 = {
    name: 'ali',
    age: 30,
    hi() {
        console.log("Hello " + this.name);
    }
}
p2.hi();


// Explicit binding (dynamic scope)
const p3 = {
    name: 'moosa',
    age: 30,
    hi: function () {
        console.log("Hello " + this.setTimeout)
    }.bind(window)
}
p3.hi();


// arrow functions (lexical scope)
const p4 = {
    name: 'tahir',
    age: 30,
    hi: function () {
        var inner = () => {
            console.log("Hi " + this.name);
        }
        return inner()
    }
}
p4.hi();



