let testData = "                     Good Evening            ";
const newData = testData.trimEnd();
document.getElementById("test-string").innerHTML = newData.trim();
var newType;
console.log(newType);

document.getElementById("test-length").innerHTML = newData.length;
// to calculate the value of the characters in a string - length --- stringname.length
const indexText = "This is a good day, everday is a good day";
document.getElementById("index-text").innerHTML = indexText;
// document.getElementById("indexof-text").innerHTML = indexText.indexOf("good");
document.getElementById("indexof-text").innerHTML =
  indexText.lastIndexOf("good");
let word =
  "Javascript is a scripting language. Javascript is a popular web development language";
document.getElementById("replace-text").innerHTML = word.replace(
  "Javascript",
  "JS"
);
const newWord = "Hi How r U";
document.getElementById("case").innerHTML = newWord.toLowerCase();
console.log(newWord);
const test1 = "apple orange grapes";
const test2 = "mango, papaya";
const newString = test1.concat(test2);
document.getElementById("concat").innerHTML = newString;
test1.endsWith("hello");
// checks the last word of the string
test1.startsWith("hello");
// checks the beginning word of the string
test1.includes("hello");
// checks the word anywhere in the string
// if the string contains the word hello at the end of the string.. then it will return true  else false
test1.search("mango");
// this will return the index position of the particular word
test1.substr(1, 5);
// this will extract a particular text in the range of the entered index position

function getdata() {
  const newString = "checks the word anywhere in the string";
  if (newString.endsWith("hello")) {
    alertss("word in the string exists with hello word");
  } else if (newString.startsWith("checks765")) {
    alert("first word exists");
  } else {
    alert("no words exists");
  }
}

// getdata();
// getnewData();

function getnewData() {
  const age = 20;
  switch (age) {
    case 10:
      alert("junior");
      break;
    case 20:
      alert("teenager");
      break;
    case 30:
      alert("alert");
      break;
    default:
      alert("invalid age");
  }
}
// Arithmetic operators
// + - Addition
// - - Subtraction
// * - Multiplication
// / - Division
// % - Modules
// ++ - Increment
// -- - Decrement

const a = 10;
const b = 20;
console.log(a + b + 50 + 80);

// Assignment operators
// = equal to
// += addition assignment operator
const p = 10;
p += 40;
// p ----50

// -= subtraction assignment operator
const s = 20;
s -= 30;
// s --- -10

// *= multiplication assignment operator
const m = 20;
m *= 2;
// m ---- 40;

// ** exponentiation assignment operator
const e = 3;
e ** 5;
// e 3*3*3*3*3 -- 243

// /= division assignment operator
const d = 10;
d /= 5;
// d -- 2

//  %= reminder assignment operator
const r = 10;
d %= 5;
// d -- 0

// <<= left shift assignment operator
const l = 5;
l <<= 2;
//  20

// >>= right shift assignment operator
const ra = 5;
ra >>= 2;
// 5

// &= Bitwise AND operator
const u = 20;
u &= 5;
// 4

// |= Bitwise OR operator
u = 20;
u |= 5;
// 21

// comparision operators
// == double equal to -- compares only value
// === triple equal to -- compares both value and its data type
// != not qual to --- compares and check if both the values are unequal
// > greater than --- compares and checks left side value is greater than right side value
// < less than ---   compares and checks right side value is less than left side value
// >= ------ compares and checks left side value is greater or equal to the right side value
// <= -----  compares and checks right side value is less or equal  to the left side value

// logical operators
// && AND
// || OR
// ! NOT

// Coersion - automatic conversion of values from one datatype to another while performing arithmetic operations
// Coersion - implicit - automatic
// Coersion - explicit  - developers intentionally code to convert from one datatype to another

const ba = 10;
const ab = "20";
// ba + ab  = "1020"
// ba - ab  = -20
// ba * ab  = 200
// 10 - true = 9

// JSON
const user = {
  name: "sam",
  age: 20,
  ismale: true,
  emailid: "sam@gmail.com",
};
const newuser = user;
console.log(user.age);

user.location = "india";
// this is to show , how a new key value pair can be added in the existing object

// using delete we can remove key value from the object
delete user.age;
// this will remove age from the object
