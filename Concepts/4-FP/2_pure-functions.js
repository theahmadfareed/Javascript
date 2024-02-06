console.log("Pure Functions");

// No side Effects
const array = [1, 2, 3];

function removeLastItem() {
    const newArr = [].concat(array);
    newArr.pop();
    return newArr;
}
function mulBy2() {
    const newArr = [].concat(array);
    return newArr.map(item => item * 2);
}

console.log(array);
console.log(removeLastItem());
console.log(mulBy2());


// Input---->Output (Referential Transparency)
function a(a,b){
    return a+b;
}
function b(a){
    return a*2;
}

console.log(a(5,5));
console.log(b(a(5,5)));
console.log(b(10));

// can everything be pure?


