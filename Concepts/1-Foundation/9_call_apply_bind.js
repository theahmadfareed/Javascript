console.log("call(), apply(), bind()");

function sayHello() {
  console.log("Hello " + this.name);
}
var obj = { name: "Sandy" };

sayHello.call();
sayHello.call(obj);
sayHello.apply();
sayHello.apply(obj);

const wizard = {
  name: "Ali",
  health: 50,
  heal() {
    return (this.health = 100);
  },
  heal1(num) {
    return (this.health += num);
  },
};

const archer = {
  name: "Ahmad",
  health: 0,
};

console.log(1, archer);
wizard.heal.call(archer);
console.log(2, archer);
wizard.heal1.call(archer, 100);
console.log(3, archer);

wizard.heal.apply(archer);
console.log(4, archer);
wizard.heal1.apply(archer, [100]);
console.log(5, archer);

const heal = wizard.heal1.bind(archer, 100);
heal();
console.log(6, archer);
