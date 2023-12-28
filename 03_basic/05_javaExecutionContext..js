/*

=>Java Execution Context<=

1. Global Execution Context(this keyword)
2. Fuctional Execution Context
3. Eval Execution Context

*/


let val1 = 10
let val2 = 20

function addNum(num1, num2) {
    let total = num1 + num2
    return total
}

let result1 = addNum(val1, val2)
let result2 = addNum(20, 30)

/*
1. Global Execution
        ↓
       this

2. Memory Phase
   val1 → undefined
   val2 → undefined
   addNum → undefined
   result1 → undefined
   result2 → undefined

3. Execution Phase
   val1 ← 10
   val2 ← 20
   addNum → [new variable environment + execution thread]
                            ↓  
                        Memory Phase
                        val1 → undefined
                        val2 → undefined
                        total → undefined
                            ↓
                        Execution Phase
                        num1 → 10
                        num2 → 20
                        total → 30   
   //after exection delete function space
   result1 → 15
   result2 → 
*/

