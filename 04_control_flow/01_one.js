//if

const isLoggedIn = true
const tempreture = 42

// if(tempreture < 50){
//     console.log("tempreture is less the 50")
// }
// else{
//     console.log("tempreture is greater than 50")
// }


const score = 200
// if(score>100){
//     let power = 'fly'
//     console.log(`user power is : ${power}`)
// }

// console.log(`user power is : ${power}`)


const balance = 1000
// if(balance>500) console.log("test")



const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Allow to by course")
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("User logged in")
}


