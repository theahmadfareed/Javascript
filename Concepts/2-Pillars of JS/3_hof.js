console.log("HOF");
// HOF => Function that can take other functions as arguments or return other functions

function giveAccessTo(name) {
  console.log("Access granted " + name + "!");
}

function authenticate(person) {
  let array = [];
  for (let i = 0; i < 1000000; i++) {
    array.push(i);
  }
  return giveAccessTo(person.name);
}

function letPersonLogin(person, fn) {
  if (person.level === "user") {
    return fn(person);
  } else if (person.level === "admin") {
    return fn(person);
  }
}

letPersonLogin({ level: "admin", name: "Ali" }, authenticate);


// Exercise HOF
const multiplyBy = function(n1){
  return function(n2){
    console.log(n1 * n2);
  }
}
// const multiplyBy = (num1) => (num2) => console.log(num1 * num2);

const mulByTwo = multiplyBy(2);
mulByTwo(5);
const mulByFive = multiplyBy(5);
mulByFive(5);
multiplyBy(4)(4);
