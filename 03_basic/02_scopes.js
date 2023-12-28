// let c =300
if (true) {
    let a = 10
    const b = 20
    var c = 30  //c scope is global
}

// console.log(c) 

function one() {
    let username = "Pawan"
    function two() {
        const website = "youtube"
        // console.log(username)
    }
    two()
}

one()





//***********Intresting************/

console.log(addOne(5))
function addOne(num) {            //here we declare the function
    return num + 1
}
console.log(addOne(5))



//console.log(addTow(5))         //Error
const addTow = function (num) {
    return num + 2
}
console.log(addTow(5))