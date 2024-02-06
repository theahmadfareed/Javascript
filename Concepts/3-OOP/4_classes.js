console.log("Classes");

// ES6 Classes (syntatic sugure)
class demoElf {
    constructor(name, weapon) {
        this.name = name;
        this.weapon = weapon;
    }
    attack(){
        return console.log(this.name+' attacks with '+this.weapon);
    }
}

// Instantiation of class
const hadi = new demoElf('Hadi','joint');
hadi.attack()
// console.log(hadi instanceof demoElf);




















