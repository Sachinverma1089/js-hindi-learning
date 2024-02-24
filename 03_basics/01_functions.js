


// function sayMyName(){
//     console.log("s");
// console.log("a");
// console.log("c");
// console.log("H");
// console.log("i");
// console.log("n");

// }

// sayMyName()

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2);
// }

function addTwoNumbers(num1,num2){
    // let result = num1+num2
    // return result

    return num1+num2
    
}
const result=addTwoNumbers(3,5)

// console.log("Result",result);

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return

    }
    return `${username} just loggedIn`
}

// console.log(loginUserMessage("Sachin Verma"));
console.log(loginUserMessage());


function calculateCartPrice (...num1){
    return num1

}

console.log(calculateCartPrice(2,45,56));

const user={
    username: "sachin",
    prices: 199
}

function handleObject(anyObject){
    console.log(`user name is ${anyObject.username} and price is ${anyObject.price}`);


}

// handleObject(user)
handleObject({
    username:"sacm",
    price: 399
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));