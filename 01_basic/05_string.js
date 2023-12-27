const name = "Pawan"
const repoCount = 50

//console.log(name+repoCount)

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('pawan-pc-com')

// console.log(gameName[0])
// console.log(gameName.__proto__)

// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('w'))

const newString = gameName.substring(0,4)
console.log(newString)

const authorString = gameName.slice(-8,4)
console.log(authorString)

const newStringOne = "    Pawan     "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://pawan.com/pawan%20sahu"
console.log(url.replace('%20','-'))
console.log(url.includes('pawan'))

console.log(gameName.split('-'))

