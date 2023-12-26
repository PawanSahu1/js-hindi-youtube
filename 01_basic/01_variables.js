const accountId=121610;
let accountEmail="pawan@gmail.com"
var accountPassword="12345"
accountCity = "Raipur"
let accountState

// accountId=12161040; //Not allowed

accountEmail="pa@gmail.com"
accountPassword="12121"
accountCity = "bhilai"

console.log("Account Id is : "+accountId);

/*
Prefer not to use var
because of issue in block scope and funtional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
