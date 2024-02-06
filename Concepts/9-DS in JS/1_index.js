console.log("Data Structures!");

/*
Arrays
*/
console.log("Arrays");

// static (fixed in size)
const arr1 = [1, 1.5, 123e5, 123e-5, "A", Symbol("Ali"), true, null, undefined, function hello(){console.log("Function")}, {name: "Ali", age: 35}];

// dynamic (increase size based on need)
const array = [];
for(let i=0; i<5; i++){
    array[i] = i;
}

const arr2 = new Array(1, 1.5, 123e5, 123e-5, "A", Symbol("Ali"), true, null, undefined, function hello(){console.log("Function")}, {name: "Ali", age: 35})



// Methods (push, pop, unshift, splice)

//
const strng = "1221";
function isP(str){
    if(str === str.split('').reverse().join('')){
        return true;
    } else {
        return false;
    }
}
// console.log(isP(strng));

//
const a1 = [2,1,5,3,4];
const a2 = [6,9,8,7];

function arrJoin(arr1, arr2){
    let temp = []
    console.log(temp.concat(arr1, arr2).sort());
}
// arrJoin(a1, a2);



/*
Hash table
*/
console.log("Hash Table");

let user = {
    name: "Ali",
    age: 30,
    address: {
        state: "Punjab",
        city: "Lahore"
    },
    skills: ["HTML", "CSS", "HTML"],
    sing(){
        console.log("Hu la lala...");
    }
}

user.sing();

// any data type as keys , maintains insertion order
// set
let u1 = new Map()
let u2 = new Set()



class HashTable{
    constructor(size){
        this.data = new Array(size);
    }

    _hashFun(key){
        let hash = 0;
        for (let index = 0; index < key.length; index++) {
            hash = (hash+key.charCodeAt(index)*index) % this.data.length
            // console.log(hash);
        }
        return hash
    }

    set(key, value){
        let address = this._hashFun(key);
        if(!this.data[address]){
            this.data[address] = []
        }
        this.data[address].push([key, value])
        return this.data
    }
    
    get(key){
        let address = this._hashFun(key)
        const currBucket = this.data[address]
        console.log(currBucket)
        if(currBucket){
            for (let index = 0; index < currBucket.length; index++) {
                if(currBucket[index][0] === key){
                    return currBucket[index][1]
                }
                
            }
        }
        return undefined
    }

    keys(){
        const keysArr = []
        for (let index = 0; index < this.data.length; index++) {
            if(this.data[index]){
                keysArr.push(this.data[index][0][0])
            }            
        }
        return keysArr
    }

}



const ht = new HashTable(50);
ht.set("grapes", 1000);
ht.set("lemon", 100);
ht.set("potato", 500);
ht.get("grapes");
// console.log(ht.keys());



//
function recOc(arr){
    let ht1 = {};
    for (let index = 0; index < arr.length; index++) {
        let num = arr[index];
        if (num in ht1) {
            ht1[num].occ++
            console.log(ht1[num])
            return num
        } else if(!(num in ht1)){
            ht1[num] = { num: num, occ: 1 };
        }
        else{
            return undefined
        }
        console.log(ht1[num]);
    }
}

console.log(recOc([2,5,1,2,3,5,1,2,4])); // Output: 2
console.log(recOc([2,5,1])); // Output: undefined
