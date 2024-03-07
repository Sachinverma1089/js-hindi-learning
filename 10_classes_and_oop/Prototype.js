// let myName = "Sachin       "

// console.log(myName.truelength);  //we want to make a method like truelength




// let myHeroes = ['thor','spiderman']
// let heroPower = {
//     thor: "hammer",
//     spider: "sling",
//     getSpiderPower: function(){
//         console.log(`Spidy power is ${this.spider}`);
//     }
// }

// Object.prototype.sachin = function (){
//     console.log(`Sachinis present inall objects`);
    
// }

// // heroPower.sachin()
// Array.prototype.heysachin = function(){
//     console.log(`Sachin says hello`);
// }

// // myHeroes.sachin()
// // myHeroes.heysachin()
// // heroPower.heysachin()

// //inheritance

// const User = {
//     name: "chai",
//     email: "alph@gmail.com"
// }

// const Teacher = {
//     makeVideo: true
// }
// const TeachingSupport = {
//     isAvailable: false

// }

// const TASupport = {
//     makeAssignment:'Js assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport,Teacher)


let anotherUsername  = "ChairAirCode   "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True length is : ${this.trim().length}`);


}

anotherUsername.trueLength()

"Sachin".trueLength()
"iceTea".trueLength()