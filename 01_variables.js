const accountId = 133841
let accountEmail = "jeet@gmail.com"
var accountPassword = "4321" // not preferable  
accountCity = "New York" // not preferable
let accountState  // undefined in output

// accountId = 2 (constant cannot be overwrite)

accountEmail = "abc@gmail.com"
accountPassword = "1234"
accountCity = "Mumbai"


console.log(accountId)

 // all these can be change
console.log(accountEmail)   
console.log(accountPassword)
console.log(accountCity)

console.log("-------Now we will represent the data in tabular form------")
// we can make table of all data...............

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])


/*
prefer not to use var
because of issue in block scope and functional scope
*/