// (function(){
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */

const names = ['david', 'mark', 'marquise', 'jason'];
//
//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array.
//      */
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
console.log(names[3]);
//
//     /**
//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index.
//      */
console.log('The first name is: ' + names[0]);
// The first shape is: david

console.log('The second name is: ' + names[1]);
// The second shape is: mark

console.log('The third name is: ' + names[2]);
// The third shape is: marquise

console.log('The fourth name is: ' + names[3]);
// The fourth shape is: jason
//     /**
//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.
//      */
// const names = ['david', 'mark', 'marquise', 'triangle'];

// loop through the array and log the values
for (let i = 0; i < names.length; i++) {
    console.log('The name at index ' + i + ' is: ' + names[i]);
}

for (let name of names) {
    console.log(name);
}
//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */
names.forEach((name, number, index) => {
    console.log(name)})
// variable with the name of "i" 99.99% of the time it represents index
//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
const first = (array) => {
    return names[names.length -4]
}

const second = (array1) => {
    return names[names.length -3]
}

const last = (array3) => {
    return names[names.length -1]
}
console.log(first(0))
console.log(second(-2))
console.log(last(-1))
//      *
//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5
//      */
//
// })();