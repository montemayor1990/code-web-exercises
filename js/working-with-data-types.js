let a = 1;
console.log(a);
let b = a++;
console.log(b)
let c = ++a;
console.log(c)
// what is the value of a, b, and c?


let d = "hello";
console.log(d)
let e = false;
console.log(e)
d++;
console.log(d)
e++;
console.log(e)

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
console.log(perplexed)

let price = 2.7;
price.toFixed(2);
console.log(price)

isNaN(0)
console.log(0)

isNaN(1)
console.log(1)

isNaN("")
console.log("")

console.log(isNaN("string"))


isNaN("0")
console.log("0")

isNaN("1")
console.log("1")

isNaN("3.145")
console.log("3.145")

isNaN(Number.MAX_VALUE)
console.log(Number.MAX_VALUE)

isNaN(Infinity)
console.log(Infinity)

isNaN("true")
console.log("true")

isNaN(true)
console.log(true)

isNaN("false")
console.log("false")

isNaN(false)
console.log(false)

// to illustrate why the isNaN() function is needed:
NaN == NaN

!true
console.log(!true)

!false
console.log(!false)


!!true
console.log(!!true)

!!false
console.log(!!false)

!!0
console.log(!!0)

!!-0
console.log(!!-0)

!!1
console.log(!!1)

!!-1
console.log(!!-1)

!!0.1
console.log(!!0.1)

!!"hello";
console.log(!!"hello");

!!""
console.log(!!"");

!!''
console.log(!!'');

!!"false"
console.log(!!"false");

!!"0"
console.log(!!"0");
//
let sample = "Hello Codeup";


console.log(sample + " students");
console.log(sample.replace('Codeup', 'Class'));
console.log(sample.indexOf("C"));
console.log(sample.substring(6, 12));

let littleMermaid = 3;
let brotherBear = 5;
let hercules = 1;
let perDayCost =3
console.log(littleMermaid*perDayCost + brotherBear*perDayCost + hercules*perDayCost);

let google = 400;
let facebook = 350;
let amazon = 380;
let hrsFb = 10;
let hrsG = 6
let hrsAmz = 4

console.log(facebook*hrsFb + google*hrsG + amazon*hrsAmz);

// let username = 'codeup';
// let password = 'notastrongpassword';
// let isPassW = password.length <= 5;
// console.log(isPassW);

// userName = username.length < 20;
// console.log(userName);
//
// let passNot = password !== username;
// console.log(passNot);
//
// let whiteSpace = password.includes(" ") + username.includes(" ");
// console.log(whiteSpace);
//
// let whitepace = whiteSpace != " ";
// console.log(whitepace);


// Create a variable that holds a boolean value for each of the following conditions:
// the password must be at least 5 characters
// the password must not include the username
// the username must be no more than 20 characters
// neither the username or password can start or end with whitespace


const username = "codeup";
const password = "notastrongpassword";

const is5Char = password.length >= 5;
const passNotContainsUsername = !password.toLowerCase().includes(username.toLowerCase());

const userLengthValid = username.length > 20;
const usernameNoHasWhiteSpace = username.trim() !== username;
const passNoHasWhiteSpace = password.trim() !== password;

const validPassWord = is5Char && passNotContainsUsername && passNoHasWhiteSpace;
console.log(`The password is valid: ${validPassWord}`)
const validUsername = userLengthValid && usernameNoHasWhiteSpace;
console.log(`The username is valid: ${validUsername}`)




