//============array==================

const myArray = [0, 1, 2, 3, 4, 5]
const myHeros = ["saktiman", "naagraj"]

const myArray2 = new Array(0, 1, 2, 3, 4, 5)

// console.log(myArray[3])


//===========Array method==============

// myArray.push(6)
// myArray.push(7)
// console.log(myArray)

// myArray.pop()
// console.log(myArray)

myArray.unshift(9)
// console.log(myArray)

myArray.shift()
// console.log(myArray)

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(9))
// console.log(myArray.indexOf(3))

const newArr = myArray.join()//change type array to string

// console.log(myArray)
// console.log(newArr)


//=======slice,splice===============

console.log("A ", myArray)

const myn1 = myArray.slice(1, 3)
console.log(myn1)
console.log("B ", myArray)

const myn2 = myArray.splice(1, 3)
console.log(myn2)
console.log("C ", myArray)
