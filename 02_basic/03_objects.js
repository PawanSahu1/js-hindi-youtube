//singleton
//Object.create

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Pawan",
    "full name": "Pawan Sahu",
    [mySym]: "mykey1",
    age: 18,
    location: "Raipur",
    email: "pawan@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser)
// console.log(JsUser.email)
// console.log(JsUser["email"])
// ===========console.log(JsUser.full name)========Error
// console.log(JsUser["full name"])

// console.log(typeof JsUser.mySym)
// console.log(JsUser[mySym])  

JsUser.email = "pawan@chatgpt.com"
// console.log(JsUser)
// Object.freeze(JsUser)
// JsUser.email = "pawan@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function () {
    console.log("Hello JsUser")
}

JsUser.greetingTow = function () {
    console.log(`Hello JsUser ${this.name}`)
}
console.log(JsUser.greeting)
console.log(JsUser.greeting())

console.log(JsUser.greetingTow())





