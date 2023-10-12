// // const username = "Montemayor"
// //
// //
// // if (username) {
// //     console.log("The user is logged in");
// // }
// // else {
// //     console.log("The user is not logged in");
// // }
// // // 0 and empty string come back as falsey.
// // // else is of course optional
// //
// //     console.log("THIS IS AFTER THE CONDITIONAL STATEMENT!");
//
// const numOfUsers = 157;
// if(numOfUsers >= 200){
//     console.log("That is a lot of users")
// } else {
//     console.log("Marketing needs a better job!")
// }
//
// console.log("This is after the conditional statement")
//
//
// const numOfPpl = 300
// if(numOfPpl <= 300) {
//     console.log("That is a lot of ppl")
// } else if (numOfPpl >= 200) {
//     console.log("not enough people")
// } else {
//     console.log("Go Cowboys")
// }
// // the last else is a catch all
//
// console.log("this should be the last statement")
//
//
// const userRole = "admin";
//
// if (userRole === "student") {
//     console.log("Let them see the curriculum");
// } else if ( userRole === "admin") {
//     console.log("Let them see everything");
// } else {
//     console.log("Don't let them say anything");
// }
//
// // whatever in here has to be interpreted as truthy or falsey
//
//
// const calculateYip = (tipPercent, total) => {
//     const  ( {
//
//     })
//     let tipDecimal = parseFloat(tipPercent) / 100;
//     let result = parseFloat(total) * parseFloat(tipDecimal);
//     return result.toLocaleString("en-US", { style: "currency", currency: "USD"});
// }
//
// // TERNARY OPERATOR
// const isLoggedIn = true
//
// // if (isLoggedIn) {
// //     let message = "Welcome back"
// // } else {
// //     let message = "please log in"
// // }
//
// let message = isLoggedIn ? "welcome back" : "please log in";
//
// console.log(message);

// TO DO's EXERCISE
// "use strict";
//
// /* ########################################################################## */
//
// /**
//  * TODO:
//  * Create a function named `analyzeColor` that accepts a string that is a color
//  * name as input. This function should return a message which relates to the
//  * color stated in the argument of the function. For colors you do not have
//  * responses written for, return a string stating so
//  *
//  * Example:
//  *  > analyzeColor('blue') // returns "blue is the color of the sky"
//  *  > analyzeColor('red') // returns "Strawberries are red"
//  *
//  *
//  *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
//  *
//  * You should use an if-else-if-else block to return different messages.
//  *
//  * Test your function by passing various string literals to it and
//  * console.logging the function's return value
//  */
// const colorName = "blue"
// const analyzeColor = (color) => {
//     if (color === "blue") {
//         console.log("The sky is blue.")
//     } else if (color === "red") {
//         console.log("Strawberries are red.")
//     } else {
//         console.log("I don't know anything about cyan")
//     }
// }
//
// analyzeColor("green")

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];
// /**
//  * TODO:
//  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
//  * You should see a different message every time you refresh the page
//  */
// console.log(analyzeColor(randomColor))

// /**
//  * TODO:
//  * Comment out the code above, and refactor your function to use a switch-case statement
//  */
// let analyzeColor = prompt("What is your favorite color?");
//
// switch(analyzeColor) {
//     case "blue":
//         alert("The sky is blue.");
//         break;
//     case "red":
//         alert("Strawberries are red");
//         break;
//     default:
//         alert(`${analyzeColor} I don't know anything about that`);
//         break;
// }
//
// /**
//  * TODO:
//  * Prompt the user for a color when the page loads, and pass the input from the
//  * user to your `analyzeColor` function. Alert the return value from your
//  * function to show it to the user.
//  */
let chooseColor = prompt("What is your favorite color?");
console.log(`The user entered: ${chooseColor}`);

const colorThing = (color) => {
    switch(chooseColor) {
        case "blue":
            alert("The sky is blue.");
            break;
        case "red":
            alert("Strawberries are red");
            break;
        default:
            alert(`${chooseColor} I don't know anything about that`);
            break;
    }
}

console.log(colorThing())