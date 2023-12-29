
const userEmail = "p@pawan.ai"

if (userEmail) {
    console.log("Got user email")
}
else {
    console.log("Don't have user email")
}


//*********falsy values*********//
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//*********truthy values*********//
//true,"0",'false'," ",[],{},function(){}


let userName = []
if (userName.length === 0) {
    console.log("array is empty")
}
else {
    console.log("array is not empty")
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty")
}


//Nullish Coalescing Operator (??): null , undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 =undefined ?? 10
val1 = null ?? 10 ?? 20

console.log(val1)



//Terniary Operator

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80")