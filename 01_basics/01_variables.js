const accountId = 144553
let accountEmail = "abc@gmailcom"
var accountPassword = "12345"
accountCity = "Jaipure"
let accountState;

// accountID = 2  // not allowed

accountEmail = "bbc@gmail.com"
accountPassword = "112233"
accountCity = "Bengaluru"

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

// prefer not to use var, because of issue in block scope and functional scope

