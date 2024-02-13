const myArr = []
    // JSVU|V8-debug
    % DebugPrint(myArr)


// Continious & Holey Arrays


// Optimization
/**
 * SMI (small interger)
 * Packed Element
 * Double (float, string, function)
 */

//PACKED_SMI_ELEMENTS
const arrTwo = [1, 2, 3, 4, 5]

//PACKED_DOUBLE_ELEMENTS
arrTwo.push(6.0)

//PACKED_ELEMENTS
myArr.push('A')

//HOLEY_ELEMENTS
myArr[10] = 11

console.log(arrTwo)
console.log(arrTwo.length)
console.log(arrTwo[9])

// bound check
// hasOwnProperty is very expensive

//holes are very expensive

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED