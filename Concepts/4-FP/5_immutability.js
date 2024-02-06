console.log("Immutability");

const obj = {name: "ali"};

function clone(obj){
    return {...obj};
}
function updateName(obj,name){
    const obj2 = clone(obj);
    obj2.name = name;
    return obj2;
}

const obj1 = updateName(obj, 'nana');
console.log(obj, obj1);


