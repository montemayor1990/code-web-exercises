// ***While Loops***
//
// A while loop is a basic looping construct that will execute a code block as long as a certain condition is true. For example:
//Syntax:
//
// while (/*condition*/) {
//    // body
// }


// Example
//
// let i = 0;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }


// Let's look at another example:
//
// let i = 10;
//
// while (i < 10) {
//     console.log('while loop iteration #' + i);
//     i++;
// }
// In the second example, the condition i < 10 is never true, so the code in the while loop never gets executed. Well, what if we wanted the code in the while loop to get executed at least one time regardless of whether the condition is met? That brings us to the do-while loop.




// ***Do While***
//
// A do-while loop is only different from a while in that the condition is evaluated at the end of the loop instead of the beginning. For example:
//
// Syntax:
//
// do {
//    //body
// } while(/*condition*/);


//Example:
//
// let i = 10;
//
// do {
//    console.log('while loop iteration #' + i);
//    i++;
// } while (i < 10);
// In this example, the code in the do block will get executed once before the while condition is checked. The condition is then checked to decide if the loop should continue. For the above example, the do block will only get executed once.



// ***For Loops***
//
// A for loop is a robust looping mechanism available in many programming languages. JavaScript's implementation syntax matches that of many other languages.
//
// Basic For Loop Syntax
//
// Syntax:
//
// for (/*initialization*/; /*condition*/; /*increment*/) {
//    // body
// }
//The code sample above is solely to demonstrate the general syntax of a for loop; copying and pasting it into your code or js console will cause an infinite loop.

//Example:

//    for (let i = 0; i < 10; i++) {
//        console.log('for loop iteration #' + i);
//     }

//In the example above, you can see that a for loop takes 3 expressions separated by semicolons.
//
// The first expression is called once before the first loop iteration starts and allows for initialization of loop variables. In the example, a variable i is created with an initial value of 0.
//
// The second expression is a condition that will decide if the loop should start/continue. It is called before each loop iteration. In the example, the loop will run as long as i is less than the number 10.
//
// The third expression allows for code that should be executed at the end of each loop iteration. Most often, the incrementing of loop counters takes place here.
//
// The first and third expressions in the for loop are optional. The same example with the first and third loop expressions omitted would look like this:
//
// let i = 0;
// // DONT DO THIS
// for (; i < 10;) {
//    console.log('for loop iteration #' + i);
//    i++;
// }
// The above example may look familiar. It is actually the equivalent of a while loop. This example is provided for educational purposes only; please use a while loop instead of an ugly for loop.
//
// Although uncommonly used, it should also be noted that additional initializations or increments can be provided as part of the first or third parameters by using a comma to separate them.
//
// for (let i = 0, j = 9; i < 10; i++, j--) {
//    console.log('for loop iteration #' + i + ', j = ' + j);
// }
// In general, we will use for loops when we know ahead of time how many times the loop needs to run, and while or do-while loops when we cannot know how many times the loop needs to run.
//

//Break and Continue
//
// There are two special keywords that can be used as part of loops. These are break and continue. We already used break as part of a switch statement, but let's see how it works with a loop.

//Breaking Out of a Loop
//
// Sometimes, a condition independent of the loop condition will occur that gives reason to exit the loop. The break keyword allows you to exit the loop at any time. Code execution in the loop will immediately be halted and the loop will not continue.
//


// Example:
//var numberToStopAt = 5;
//
// for (let i = 1; i < 100; i++) {
//
//    console.log('Loop counter is: ' + i);
//
//    if (i === numberToStopAt) {
//       console.log('We have reached the stopping point: break!');
//       // use the break keyword to exit from the while loop
//       break;
//       // nothing after the break will get processed
//       console.log('You will never see this line.');
//    }
// }
//In the above example, even though our for loop is setup to go from 1 to 100, we will only see the first 5 numbers in the console because the code will encounter a break statement when i reaches 5, stopping the execution of the loop.
//
// Although a for loop was used as an example, break works the same way with a while loop.


// ***Continuing the Next Iteration of a Loop***
//
// Besides breaking out of a loop, sometimes conditions occur that give reason to skip to the next loop iteration without completing the entire loop code block. The continue keyword provides this functionality.
//
// 'use strict';
//
// for (let i = 1; i < 100; i++) {
//
//    if (i % 2 !== 0) {
//       // number isn't even
//       // odd numbers aren't as cool
//       // skip the rest of the loop and continue with the next iteration
//       continue;
//    }
//
//    console.log('Here is a lovely even number: ' + i);
// }
// Like the break example, our loop is made to go from 1 to 100, but we will only ever see even numbers printed to the console. If the number is odd, the code will encounter the continue statement and skip to the next iteration.
//
// Again, although a for loop was used as an example, continue works the same way with a while loop.

