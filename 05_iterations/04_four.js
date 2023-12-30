//Object

const myObject = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shorthand is for ${myObject[key]}`)
}



//Array

const prgramming = ["java", "cpp", "js", "ruby", "py"]
for (const key in prgramming) {
    // console.log(prgramming[key])
}



//Map

const map = new Map()   //map are not interable
map.set('In', "India")
map.set('Fr', "France")
map.set('Jp', "Japan")
map.set('In', 'India')

for (const key in map) {
    console.log(key)
}