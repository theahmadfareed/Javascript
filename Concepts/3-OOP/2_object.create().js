console.log("Object.create()");
// Object.create() {prototypal inheritance}
const elfFunctions = {
    attack(){
        return console.log(this.name+' attack with '+this.weapon);
    }
}

function createElf(name, weapon){
    const newElf = Object.create(elfFunctions);
    newElf.name = name;
    newElf.weapon = weapon;
    return newElf;
}

const tahir = createElf('tahir','fire');
tahir.attack();
