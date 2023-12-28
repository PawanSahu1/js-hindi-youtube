function myFunction() {
    console.log("P")
    console.log("A")
    console.log("W")
    console.log("A")
    console.log("N")
}

// myFunction()

// function addTowNum(number1,number2){
//     console.log(number1+number2)
// }


function addTowNum(number1, number2) {
    // let result = number1+number2
    // return result

    return number1 + number2
}

const result = addTowNum(3, 4)
// console.log("Result : ",result)


function loginUserMessage(username = "unknown") {
    /*if(!username) same as below*/
    if (username === undefined) {
        console.log("Please enter a usesrname!")
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage())
// console.log(loginUserMessage("Pawan"))





//=============functions with array and objects================

// function calculateCartPrice(num1){
//     return num1
// }
// console.log(calculateCartPrice(100,200,300))


function calculateCartPrice(var1, var2, ...num1) {
    return num1
}
// console.log(calculateCartPrice(100,200,300,400,500))


//***********************************************************

const user = {
    username: "pawan",
    price: 999
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
// handleObject(user)
// handleObject({
//     username:"hitesh",
//     price:199
// })


//***********************************************************

const myNewArray = [200, 400, 600, 800]
function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([100,200,300,400]))










