//for of loop

//["","",""]
//[{},{},{}]


let arr = [1, 2, 3, 4, 5]
for (const num of arr) {
    // console.log(num)
}


let greeting = "Hello World!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`)
}


//Map 

const map = new Map()
map.set('In', "India")
map.set('Fr', "France")
map.set('Jp', "Japan")
map.set('In', 'India')

for (const [key, value] of map) {
    // console.log(key,":-",value)
}



//Object

const myObject = {
    game1: "NFS",
    game2: "Spiderman"
}

// for (const [key,value] of myObject) {
//     // console.log(key,":-",value)   //Error
// }


