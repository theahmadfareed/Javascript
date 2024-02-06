console.log("Promises");
// ES6
/*
We use promises instead of callbacks
Promises = a promise is an object that may produce a single value some time in the future. Either a resolved value or a reason that it's not resolved(rejected).
it can have 3 values: fullfilled, pending, rejected
*/

// callback pyramid of dome 
/*
movePlayer(100, 'left', function(){
    movePlayer(400, 'left', function(){
        movePlayer(10, 'right', function(){
            movePlayer(330, 'left', function(){
            })
        })
    })
})
*/

// Promises
/*
movePlayer(100, 'left')
    .then(()=>movePlayer(400, 'left'))
    .then(()=>movePlayer(10, 'left'))
    .then(()=>movePlayer(100, 'right'))
    .then(()=>movePlayer(200, 'left'))
*/

const promise = new Promise((resolve, rejected) => {
    if (true) {
        resolve("Stuff Worked");
    } else {
        rejected("Error, it broke!")
    }
})

promise
    .then(result => result + '!')
    .then(result2 => {
        // throw Error;
        console.log(result2)
    })
    .catch(() => console.log("error"));


//
const promise1 = new Promise((resolve, rejected) => {
    setTimeout(resolve, 100, 'Hi');
})
const promise2 = new Promise((resolve, rejected) => {
    setTimeout(resolve, 1000, 'Hii');
})
const promise3 = new Promise((resolve, rejected) => {
    setTimeout(resolve, 2000, 'Hiii');
})

Promise.all([promise1, promise2, promise3])
    .then(values => {
        // console.log(values);
    })


//
const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts',
];

// fetch() is a promise
Promise.all(urls.map(url => {
    return fetch(url).then(resp => resp.json())
})).then(results => {
    // console.log(results[0]);
    // console.log(results[1]);
    // console.log(results[2]);
}).catch(()=>{console.log("Error")})





