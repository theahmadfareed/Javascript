console.log("Functional Programming");
// Seperation of data and function(effects).
/*
Clear + Understandable
Easy to Extend
Easy to Maintain
Memory Efficient
Dry
*/

/*
Implement a Cart feature
1: add items to cart
2: add 3% tax to item in cart
3: buy item: cart-->purchases
4: empty cart
5: histroy
*/

const user = {
    name: "ali",
    active: true,
    cart: [],
    purchases: []
};
let histroy = [];

const compose = (f, g) => (...args) => (f(g(...args)));

function itemToCart(user, item) {
    histroy.push(user);
    const updateCart = user.cart.concat(item);
    return Object.assign({}, user, {cart: updateCart});
}

function purchaseItem(...fns) {
    histroy.push(user);
    return fns.reduce(compose)
}

function applyTax(user) { 
    histroy.push(user);
    const {cart} = user;
    const tax = 1.3;
    const updateCart = cart.map(item=>{
        return {
            name: item.name,
            price: item.price*tax
        }
    })
    return Object.assign({}, user, {cart: updateCart});
}

function buyItem(user) { 
    histroy.push(user);
    return Object.assign({}, user, {purchases: user.cart});
}

function emptyCart(user) {
    histroy.push(user);
    return Object.assign({}, user, {cart: []});
}


console.log(purchaseItem(emptyCart, buyItem, applyTax, itemToCart)(user, {name: 'laptop', price: 15000}));
console.log(histroy);

















