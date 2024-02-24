


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
