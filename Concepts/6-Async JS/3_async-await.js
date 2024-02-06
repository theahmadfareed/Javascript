console.log("Async/Await");
// ES8
// Async/Await uses promises underneath the hood

// async function playerStart(){
//     const firstMove = await movePlayer(100, 'left');
//     await movePlayer(100, 'left');
//     await movePlayer(100, 'right');
//     await movePlayer(100, 'left');
// }

// try-catch-finally
const list = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/albums',
    'https://jsonplaceholder.typicode.com/posts',
];

async function fetcData() {
    try {
        const [users, albums, posts] = await Promise.all(list.map(url => {
            return fetch(url).then(resp => resp.json())
        }))
        console.log(users);
        // console.log(albums);
        // console.log(posts);
    } catch (error) {
        console.log('oops', error);
    } finally {
        console.log("Done");
    }
}
fetcData();


//ES9
// finally
// Object Spread Operator (...var)
const aObj = {
    ali: 10,
    bilal: 20,
    ch: 30
}
const { ali, ...rem } = aObj;
// console.log(ali); 
// console.log(rem); 

// for await of 
const fetchData1 = async function () {
    const arrOfPromises = list.map(url => fetch(url));
    for await (let req of arrOfPromises) {
        const data = await req.json();
        // console.log(data);
    }
}
fetchData1();


// (callbacks) CallBack Queue ----> Task Queue (low priority)
// (promises) Job Queue ------> Microtask Queue (high priority)


// Parallel, Sequence and Race
const promisify = (item, delay) =>
    new Promise((resolve) =>
        setTimeout(() =>
            resolve(item), delay));

const a = () => promisify('a', 1000);
const b = () => promisify('b', 3000);
const c = () => promisify('c', 5000);

// console.log(a(), b(), c());

// Parallel
async function parallel() {
    const promises = [a(), b(), c()];
    const [o1, o2, o3] = await Promise.all(promises);
    return `parallel is done:  ${o1} ${o2} ${o3}`;
}
parallel().then(console.log);

// Race
async function race() {
    const promises = [a(), b(), c()];
    const o1 = await Promise.race(promises);
    return `race is done: ${o1}`;
}
race().then(console.log);

// Sequence
async function sequence() {
    const o1 = await a();
    const o2 = await b();
    const o3 = await c();
    return `sequence is done: ${o1} ${o2} ${o3}`;
}
sequence().then(console.log);


// ES2020
// allSettled()
Promise.allSettled([a(), b(), c()])
    .then(data => console.log(data))
    .catch(e => console.log("something failed", e));


//any() 
(async function () {
    const result = await Promise.any([a(), b(), c()]);
    console.log(result); // Prints "a", "b" or "c"
})();





