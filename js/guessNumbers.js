const targetNumber = Math.floor(Math.random() * 100) + 1;

let attempts = 0

// function checkGuess() {
//     const userGuess = parseInt(prompt("Guess a number between 1 and 100:"));
//     if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//         alert("Please enter a valid number 1-100");
//         checkGuess()
//     } else {
//
//
//         attempts++;
//
//         if (userGuess === targetNumber) {
//             alert(`you got the number in ${targetNumber} in ${attempts}`)
//         }
//     }
// }
//
// checkGuess();

//recursion is a way to loop, look up ternary statements