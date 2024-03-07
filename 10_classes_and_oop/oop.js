// const user = {
//     username: 'Sachin' ,
//     loginCount : '8',
//     signedIn: true,

//     getUserDetalis: function () {
//         //console.log("Goot user details from database");
//         console.log(`Usernam: ${this.username}`);
//         console.log(this);
        
//     }


// }

// console.log(user.getUserDetalis());
// console.log(user.username);
// console.log(this);
// console.log(user);

function User(username,loginCount,isLoggedIn){
    
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
    return this
}

const userOne = new User('Sachin',12,true)
const userTwo = new User("ChaiAurCode",11,false)
console.log(userOne.constructor);
// console.log(userTwo);


