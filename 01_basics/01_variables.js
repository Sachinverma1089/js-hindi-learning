const accountId = 144553
let accountEmail = "sachin@google.com"
var accountPassword ="12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2
accountEmail = "hc@hc.com"
accountPassword="12212"
accountCity="Bengaluru"
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and function scope*/ 
console.table([accountEmail,accountId,accountPassword,accountState])
