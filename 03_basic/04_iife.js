//Immediately Invoked Function Expression(IIFE)


(function chai() {
    //Named IIFE
    console.log(`DB Connected`)
})();//semicolon is mendatory


((name) => {
    console.log(`DB Connected Tow ${name}`)
})("Pawan")

