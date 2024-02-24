// Primitive

// 7 types: String, Number, Boolaen, null,undefined, Symbol, BigInt


const score = 100
const scoreValue=100.3
const isLoggedIn=false
const outsideTemp=null
let userEmail
const id = Symbol('123')
const anotherId=Symbol('123')

console.log(id);
console.log(anotherId);
console.log(id == anotherId)

const bigNumber=65445645564654655665n




// Reference Type (Non primitive)

// Array,Objects,Functions


const heroes = ["shaktiman","naagraj","doga"];
let myObj={
    name:"Sachin",
    age:20,

}

const myFunction = function(){
    console.log("Namaste Duniya!");
}

console.log(typeof myFunction);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)

let myYoutubename="excusemesachin"

let anothername=myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);



let userOne ={
    email:'user@google.com',
    upi: "user@ybl"
}


let userTwo=userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);