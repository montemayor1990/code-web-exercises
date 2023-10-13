'use strict';

// todo:
// Create an array of months for printing dates
let months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
];

// todo:
// Create the date corresponding to your birthday using the JavaScript Date object.
//let jsBirthday

const myBirthday = new Date('1990-12-17');
console.log(myBirthday);


// todo:
// Log your birthday in the format: January 1, 2014 using the JavaScript Date object.
const formattedDate = `${months[myBirthday.getMonth()]} ${myBirthday.getDate()}, ${myBirthday.getFullYear()}`;
console.log(formattedDate);
// See link below for methods needed:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#Getter
// console.log('Here is my birthday using JavaScript: ');