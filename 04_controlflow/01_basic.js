// If

// const isUserloggedIn = true

// if (2 === "2"){
//     console.log("executed");

// }

// !== 

// const score = 200
// if(score > 100){
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);


// shorthand notation

// const balance = 1000

// if(balance>500) console.log("test"),console.log("Test 2");

const userLoggedIn =true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle ){
    console.log("User logged in");
}

