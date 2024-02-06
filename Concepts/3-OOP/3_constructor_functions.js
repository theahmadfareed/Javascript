console.log("Constructor Functions");

// Constructor Functions (new)
function Elf(name, weapon){
    this.name = name;
    this.weapon = weapon;
}
// Prototype
Elf.prototype.attack = function(){
    return console.log(this.name+' attacks with '+this.weapon);
};

const ali0 = new Elf('ali','joint');
ali0.attack()


// Constructor Functions (new)
const Elf1 = new Function('name','weapon',
`this.name = name;
this.weapon = weapon;`
);
// Prototype
Elf1.prototype.attack = function(){
    return console.log(this.name+' attacks with '+this.weapon);
};

const sara = new Elf1('sara','fireworks');
// console.log(sara);
sara.attack();



// Constructor Functions (new)
function Elf2(name, weapon){
    console.log('this',this);
    this.name = name;
    this.weapon = weapon;
    var a = 5;
    console.log('this',this);
}
// Prototype
Elf2.prototype.attack = function(){
    return console.log(this.name+' attacks with '+this.weapon);
};
// Prototype
Elf2.prototype.build = function(){
    const self = this;
    function building(){
        // return this.name + ' builds a house';
        return self.name + ' builds a house';
    }
    // return building.bind(this)
    return building()
};

const moosa = new Elf2('Moosa','joint');
// console.log(moosa.__proto__);
// console.log(Elf2.prototype);
// console.log(moosa.prototype);
// console.log(moosa.build()());
console.log(moosa.build());
moosa.attack()



















