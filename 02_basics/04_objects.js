// // const tinderUser = new Object()  //Singleton Object

// const tinderUser={}  //Non Singleton User

// tinderUser.id = "123abc"
// tinderUser.name ="Sachin"
// tinderUser.isLoggedIn = false;
// //console.log(tinderUser);

// const regularUser={
//     email: "some@gmail.com",
//     fullName:{
//         userfullName: {
//             firstname: "Sachin",
//             lastname: "verma"

//         }

//     }
// }

// //console.log(regularUser.fullName.userfullName.firstname);

// const obj1 = {1: "a", 2:"b"}
// const obj2 = {3: "a", 4:"b"}
// const obj4 = {5: "a", 6:"b"}


// //const obj3={obj1,obj2}
// //const obj3=Object.assign({},obj1,obj2,obj4)

// const obj3={...obj1,...obj2,...obj4}
// //console.log(obj3);





// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"

//     },
//     {
//         id: 1,
//         email: "h@gmail.com"

//     },
//     {
//         id: 1,
//         email: "h@gmail.com"

//     },
//     {
//         id: 1,
//         email: "h@gmail.com"

//     },

// ]

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));


// console.log(tinderUser.hasOwnProperty('isLogged'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Sachin"

}

//course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

const navbar = () =>{

}

navbar(company = "sachin")



