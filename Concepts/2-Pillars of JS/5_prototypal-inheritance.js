console.log("Prototypal Inheritance")

let dragon = {
    name: 'Ali',
    fire: true,
    fight() {
        console.log('5');
    },
    sing() {
        if (this.fire) {
            console.log(`I'm ${this.name}, the breather of fire.`);
        }
    }
}
dragon.fight();
dragon.sing();

let lizard = {
    name: 'kiki',
    fight() {
        console.log('1');
    }
}
const singLizard = dragon.sing.bind(lizard);
singLizard();

// Prototypal Inheritance
let lizard1 = {
    name: 'kuku',
    fight() {
        console.log('2');
    }
}
// Prototypal Chain
lizard1.__proto__ = dragon;
lizard1.sing();
console.log(dragon.isPrototypeOf(lizard1));


//
for (let prop in lizard1) {
    console.log(prop);
}
//
for (let prop in lizard1) {
    if (lizard1.hasOwnProperty(prop)) {
        console.log(prop);
    }
}

//
let human = {
    mortal: true
}

// Object.create()
let socrates = Object.create(human);
socrates.age = 30;
console.log(human.isPrototypeOf(socrates));


// Exercise
// 1=> new Date('1900-10-10').lastYear();
// 1899
// 2=> console.log([1,2,3].map());
// [ '1😄', '2😄', '3😄' ]

// Solution 1
Date.prototype.lastYear = function(){
    return this.getFullYear() - 1;
}
let date = new Date('1900-10-10').lastYear();
console.log(date);

// Solution 2 
Array.prototype.map = function(){
    let arr = [];
    for (let index = 0; index < this.length; index++) {
        arr.push(this[index]+'😄');
    }
    return arr;
}
console.log([1,2,3].map());




