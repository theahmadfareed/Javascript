console.log("Memoization");
// Dynamic Programming
// Memoization ~~~~~~ Caching

let cache = {};
function memoizedAddTo80(n) {
    if (n in cache) {
        return cache[n];
    } else {
        console.log("Long Time");
        cache[n] = n + 80;
        return cache[n];
    }
}

console.log('1', memoizedAddTo80(5));
console.log('2', memoizedAddTo80(5));
console.log('3', memoizedAddTo80(6));


// Improved Version
function memoizedAddTo70() {
    let cache = {};
    return function (n) {
        if (n in cache) {
            return cache[n];
        } else {
            console.log("Long Time");
            cache[n] = n + 70;
            return cache[n];
        }
    }
}
const memoized = memoizedAddTo70();
console.log('1', memoized(5));
console.log('2', memoized(5));
console.log('3', memoized(6));


