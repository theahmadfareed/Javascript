// 1st Pillar of Javascript
console.log('Closures')
// Closures allow a function to access variables from an enclosing scope or environment, even after it leaves the scope in which it was declared.

function a() {
    let grandpa = 'grandpa';
    return function b() {
        let father = 'father';
        return function c() {
            let son = 'son';
            console.log(`${grandpa}->${father}->${son}`);
        }
    }
}
a()()();

// Closures are also called Lexical Scoping.
// lexical means where the code is written 
// scope means what variables we have access to

const boo = (string) => (name1) => (name2) => console.log(`${string}->${name1}->${name2}`);
boo('hi')('ahmad')('fareed');


// Closures Exercise
function callMeMaybe() {
    const callMe = "Hi, i'm now here.";
    setTimeout(function () {
        console.log(callMe);
    }, 4000);
}
callMeMaybe();


// Closures and Memory (Memory Efficient)
function heavyDuty(index) {
    const bigArray = new Array(5000).fill('😄');
    console.log('Big Array Created!')
    return console.log(bigArray[index]);
}
heavyDuty(4998);
heavyDuty(4998);
heavyDuty(4998);


function heavyDuty2() {
    const bigArray = new Array(5000).fill('😄');
    console.log('Big Array Created Again!')
    return function (index) {
        return console.log(bigArray[index]);
    }
}
const res = heavyDuty2();
res(4998);
res(4997);
res(4996);
res(4995);


// Closures and Encapsulation
const makeNuclearButton = () => {
    let timeWithoutDestruction = 0;
    const passTime = () => timeWithoutDestruction++;
    const totalPeaceTime = () => timeWithoutDestruction;
    const launch = () => {
        timeWithoutDestruction = -1;
        return console.log('💥');
    }
    setInterval(passTime, 1000);
    return {
        // launch: launch,
        totalPeaceTime: totalPeaceTime
    }
}
// const ohno = makeNuclearButton();
// console.log(ohno.totalPeaceTime());
// console.log(ohno.totalPeaceTime());
// console.log(ohno.totalPeaceTime());
// // ohno.launch();
// console.log(ohno.totalPeaceTime());



// Exercise
let view;
function initialize() {
    view = '⛰️';
    console.log('View has been set!');
}
initialize();
initialize();
initialize();
console.log(view);

// Solution
let view1;
function initialize() {
    let called = 0;
    return function () {
        if (called > 0) {
            return;
        }
        else {
            view1 = '⛰️';
            called++;
            console.log('View has been set!');
        }
    }
}
const once = initialize();
once();
once();
once();
console.log(view1);



// Exercise
const array = [1, 2, 3, 4, 5];
for (var index = 0; index < array.length; index++) {
    setTimeout(function () {
        console.log("I'm at " + index);
    }, 3000);
}

// Solution
const array1 = [1, 2, 3, 4, 5];
for (let index = 0; index < array1.length; index++) {
    setTimeout(function () {
        console.log("I'm at " + array1[index]);
    }, 3000);
}

// Solution
const array2 = [1, 2, 3, 4, 5];
for (let index = 0; index < array2.length; index++) {
    (function (closurei) {

        setTimeout(function () {
            console.log("I'm at " + array2[closurei]);
        }, 3000);

    })(index)
}

