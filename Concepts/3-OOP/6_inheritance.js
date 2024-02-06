console.log("Inheritance");

// ES6 Classes (syntatic sugure)
class Character {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack() {
        return console.log(this.name + ' attacks with ' + this.weapon);
    }
}

class c1 extends Character {
    constructor(name, weapon, type) {
        super(name, weapon);
        // console.log(this);
        this.type = type;
        // console.log(this);
    }
}

// Instantiation of class
const khalid = new c1('Khalid', 'Food', 'Beast');
console.log(khalid);
khalid.attack();









