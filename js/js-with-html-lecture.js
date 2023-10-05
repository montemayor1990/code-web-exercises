// // console.log("testing");
//
// //single line comment
//
// /*
// multi
// line
// comment
//  */
//
// //let x = 1;
// //x = x + 1
// // x += 1; same as the line 12 above
// //x += 1;
// //x += 2;
//
// //console.log(x);
// // console.log(2 + 2);
//
// // unary operators
// // let y = 5;
// // y++;
// // // written
// // y = y + 1;
// //
// // y--;
// // console.log(y);
//
// // let pi = 3.14;
// // console.log(pi);
// // let piString = pi.toString(); this a number method
// //
// // console.log(piString);
//
// // from a string to a number
// // let nmrOfStudents = "19.37";
// // nmrOfStudents = parseInt(nmrOfStudents); // this a js function, Int dealing with an integer
// // nmrOfStudents = parseFloat(nmrOfStudents); // more accurate
// //
// // console.log(nmrOfStudents);
//
//
// // let bankAccount = "19.23456"
// // console.log(Original Value)
// // bankAccount = parseFloat(bankAccount);
// // console.log(bankAccount);
// //to.Fix used for numbers, rounds up and goes to the number places like to.Fix(2) will round up to two decimal places to.Fix(6) would be 6 numbers after the decimal, turns it into a string
//
// // let x = "griffin";
// // let xNumber = Number(x); //
// // console.log(xNumber);
// //
// // let isEqual = xNumber === NaN; // can't do this wau
// // console.log("NaN strict comparison =>", isEqual);
// // let isReallyEqual = isNaN(xNumber);
// // console.log("isNaN function =>", isReallyEqual);
// //
// // // truthy/falsey
// //
// // let emptyString = "" == false;
// // console.log("emptyString =>", emptyString);
// // let zero = 0 == false;
// // console.log("zero => ", zero);
// // let noData = null; // intentional absence of data
// //
// // if (noValue) {
// //     console.log("YUP, IT's TRUTHY");
// // } // does it have value or is it one of the falsey values
//
// // STRING METHODS
// let username = "Justino (Nova)";
// let guildName;
//
// // get the length of the string
// let nameLength = username.length;
// console.log("nameLength => ", nameLength);
// // find the index of the "(" character
// let guildNameStart = username.indexOf("(");
// console.log("guildNameStart => ", guildNameStart);
// // get the index before the closing ")"
// let guildNameEnd = nameLength - 1;
// guildName = username.substring(guildNameStart + 1, guildNameEnd);
// console.log("guildName => ", guildName);
// // we want to remove the guild name from the username now
// let guildNameWithParenthesis = "(" + guildName + ")";
// username = username.replace(guildNameWithParenthesis, "");
// username = username.trim();
// console.log("username => ", username);
//
// // TEMPLATE STRINGS
// let channelMessage = "username from the guildName guild has logged in.";
// channelMessage = username + " from the " + guildName + " guild has logged in.";
// channelMessage = `${username} from the ${guildName} guild has logged in.`
// console.log(channelMessage); // not only escape single or double quotes, you can also enter dynamic data into the string
//
//
//
// The Alert Function
//alert("this is my message")
//
// The Confirm Function
// let answer = confirm("still watching?");
// console.log(`The user's answer was ${answer}`);
//
// The Prompt Function
//let userInput = prompt('Please type something:');
// console.log(`The user entered: ${userInput}`);
//
//
//
