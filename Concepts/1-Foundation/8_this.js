// "this" => is the object that the function is a property of, gives methods access to their object, execute same code for multiple objects
// arrow functions are lexically bound.
// "this" is dynamically scoped

console.log("This");

// gives methods access to their object
var obj = {
  name: "Fareed",
  getName: function() {
    return this.name;
  },

  setName: function() {
    console.log(this.getName() + "!");
  },
};
obj.setName();

// execute same code for multiple objects
// "this" is dynamically scoped
function importantPerson() {
  console.log(this.name + "!");
}

const name = "Muhammad";
const obj1 = {
  name: "Moosa",
  importantPerson: importantPerson,
};
const obj2 = {
  name: "Hadi",
  importantPerson: importantPerson,
};
obj2.importantPerson();


// Dynamic vs Lexical Scope
const x = ()=>{
  console.log('x',this);
  const y = ()=>{
    console.log('y', this);
    const z = {
      hi: ()=>{
        console.log('z',this);
      }
    }
    z.hi();
  }
  y();
}
x();