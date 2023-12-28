
const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])


// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)


// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)


// const another_arr = [1,3,4,[5,6,2],7,[6,4,5,[1,2]]]
// const real_another_arr = another_arr.flat(Infinity)
// console.log(real_another_arr)


console.log(Array.isArray("pawan"))
console.log(Array.from("pawan"))
console.log(Array.from({ name: "pawan" }))       //very important

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3))