
const user = {
    username: "Pawan",
    price: 999,
    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website.`)
        // console.log(this)
    }
}

// user.welcomeMessage()
// user.username="hitesh"
// user.welcomeMessage()

console.log(this) // Refer to Empty Obejcet



/************Intresting***********/

// function chai(){
//     console.log(this)
// }
// chai()



// const chai = function(){
//     let username="Pawan"
//     console.log(this.username) 
// }
// chai()  //Undefined



const chai = () => {
    let username = "Pawan"
    console.log(this)
}
// chai()   //arrow function return empty object



// const addTwo = (num1,num2)=>{
//     return num1+num2
// }

// const addTwo = (num1,num2) => num1+num2 //implicit return
// const addTwo = (num1,num2) => (num1+num2)

// const addTwo = (num1,num2) => {username:"Pawan"}  //this is undefined
const addTwo = (num1, num2) => ({ username: "Pawan" })  //return object
console.log(addTwo(7, 6))