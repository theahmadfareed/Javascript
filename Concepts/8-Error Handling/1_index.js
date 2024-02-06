console.log("Error Handling");

function a() {
    let e = new Error('what the helllll')
    return e
}

console.log(a().message);
// console.log(a().name);
// console.log(a().stack);

// let b = new SyntaxError
// let c = new ReferenceError


// Sync Error Handling
// try-catch-throw
function fail() {
    try {
        // throw new Error("helllll nooo");
        console.log("Works");
        throw new Error("helllll nooo");
    }
    catch (e) {
        console.log(e.message);
    }
}
fail();


// Async Error Handling
// catch()
//Promises & Async/Await

Promise.resolve('asyncFail')
    .then(resp => {
        throw new Error("#1 failed");
        return resp;
    })
    .catch(e => {
        console.log(e.message);
    })

const fn = async function () {
    try {
        await Promise.reject("oppse")
    } catch (err) {
        console.log(err)
    }
    console.log("Is this goood?");
}
fn();


// Extending Errors
class authError extends Error{
    constructor(message){
        super(message)
        this.name = "oppsie"
        this.favSnack = "Chips"
    }
}
const xx = new authError("hellnooo")
console.log(xx.favSnack)



