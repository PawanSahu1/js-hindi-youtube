// const tinderUser = new Object()     /* Singleton Object */ 
const tinderUser = {}     /* Non-Singleton Object */

// console.log(tinderUser)

tinderUser.id = "1001"
tinderUser.name = "Scott"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "pawan@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pawan",
            lastname: "Sahu"
        }
    }
}
// console.log(regularUser.fullname.userfullname.firstname)


const obj1 = { 1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = {obj1,obj2}
// console.log(obj3)

// const obj4 = Object.assign({},obj1,obj2)
// console.log(obj4)

// console.log({...obj1,...obj2})



const users = [
    {
        id: 1,
        email: "p@gmail.com"
    },
    {
        id: 2,
        email: "p@gmail.com"
    },
    {
        id: 3,
        email: "p@gmail.com"
    },
    {
        id: 4,
        email: "p@gmail.com"
    },

]

// users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))



//==============de-structure=============

const course = {
    coursename: "js hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor

const { courseInstructor: Instrutor } = course
// console.log(courseInstructor)
console.log(Instrutor)

