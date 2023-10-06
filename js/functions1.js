
// create a function named sayHello that logs "Hello" to the console


// function sayHello() {
//     console.log("Hello")
// };
//
// sayHello();

// create a function named is coding that logs "I love coding!" to the console

// const isCoding = (userFirstName) => {
//     console.log(`${userFirstName} loves coding!`);
//     //userFirstName is just a place holder
//     //template literal ${}
// }
//
// isCoding("David");
// isCoding("John")
// isCoding is invoking
// argument is "David"

// function declaration, old school way


// anonymous function expression, not really used

// arrow functions, preferred way to use because it forces you to declare first
// const sayHello = (userFullName) => {
//     console.log(`Hello, ${userFullName}`);
// };
//
// sayHello("David");
// sayHello("John");

// Return keyboard

// const sayHello = (userFullName) => {
//     return `Hello, ${userFullName}`
// };
//
// const greeting = sayHello("David");
//
// console.log(greeting);

// const firstName = "Isaac";
// const  greetingToUser = "hates Coding";
//
const isCoding = (greeting, userFullName) => {
    return `${greeting} ${userFullName}`
};

// const greeting = isCoding(firstName, greetingToUser)
// const greeting2 = isCoding(firstName, greetingToUser)
//
// console.log(greeting);
// console.log(greeting2);

// redo the isCoding function to use an arrow function that takes in 2 arguments that returns "Isaac hates coding"


