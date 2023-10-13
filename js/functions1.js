
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
// const isCoding = (greeting, userFullName) => {
//     return `${greeting} ${userFullName}`
// };

// const greeting = isCoding(firstName, greetingToUser)
// const greeting2 = isCoding(firstName, greetingToUser)
//
// console.log(greeting);
// console.log(greeting2);

// redo the isCoding function to use an arrow function that takes in 2 arguments that returns "Isaac hates coding"

// FUNCTIONS PRACTICE EXERCISE
// Here are some extra practice exercises for functions:
// ## Celsius to Fahrenheit
// Write a function celsiusToFahrenheit(celsius) that takes a number as input, representing a temperature in Celsius, and returns the equivalent temperature in Fahrenheit.
const celsiusToFahrenheit = (celsius) => {
    return (celsius * (9 / 5)) + 32
};
console.log(celsiusToFahrenheit(5));
// ## Finding the Average
// Write a function average(a, b, c) that takes three numbers as arguments and returns their average.
const averageOfNums = (num1, num2, num3) => {
    return ((1 + 2 + 3) / 3)
}
console.log(averageOfNums())
// ## First Character
// Write a function firstChar(str) that returns the first character of a string.

const firstChar = (character) => {
    return character.charAt(0)
}
console.log(firstChar("David"))
// ## Last Character
// Write a function lastChar(str) that returns the last character of a string.
const lastChar = (character) => {
    return character.charAt(6)
}
console.log(lastChar("DavidMontemayor"))


// ## Is Palindrome?
//     Write a function isPalindrome(str) that takes in a string and returns true if the string is a palindrome, false otherwise. A palindrome is a word that is spelled the same forwards and backwards i.e. racecar, mom, kayak.
//     To help, here is a function reverseString(str) that takes in a string and returns the reversed string. You'll need to use it to solve isPalindrome.
// const reverseString = (str) => {
//     return str.split("").reverse().join("");



