function calculate(operation) {
  let result;
  const number1 = document.getElementById("num1").value;
  const number2 = document.getElementById("num2").value;
  if (operation === "plus") {
    if (confirm("Are you sure to perform the operation?")) {
      result = Number(number1) + Number(number2);
      document.getElementById("result").innerHTML = result;
    } else {
      alert("Operation not performed");
      document.getElementById("result").innerHTML = null;
    }
  } else if (operation === "minus") {
    result = number1 - number2;
    document.getElementById("result").innerHTML = result;
  }
  //   switch (operation) {
  //     case "plus":
  //       result = Number(number1) + Number(number2);
  //       document.getElementById("result").innerHTML = result;
  //       break;
  //     case "minus":
  //       result = number1 - number2;
  //       document.getElementById("result").innerHTML = result;
  //       break;
  //   }
}
//
// ----------------------------------------------------------------- Array     --------------------------------------

let values = [10, 30, , 90, 40, 78, 40];
let datas = ["apple", "tomato", "pineapple"];
let userData = [
  {
    name: "joseph",
    age: 30,
    city: "delhi",
    idList: [1, 9, 40, 60],
  },
  {
    name: "mary",
    age: 55,
    city: "Hyderabad",
  },
  {
    name: "john",
    age: 20,
    city: "mumbai",
  },
];
// finding the length of the array
console.log(values.length);

// value in the last position of the array
console.log("last value", values[values.length - 1]);

// adding values in the array unshift() - beginning
const a = 38;
values.unshift(a);

// adding values in the array push() - end
const b = 99;
values.push(b);

// removing values in the array shift() - beginning
values.shift();

// removing values in the array pop() - end
values.pop();
console.log(values);

// removing values using splice()
values.splice(3, 0, 101, 45);
// splice(at which index position, how many items, new values to add.....)

// findIndex() - it will return the index position of the first found value

const index = values.findIndex(findNumber);

function findNumber(n) {
  return n === 40;
}
// just using arraw function
const index2 = values.findIndex((x) => x === 40);

console.log(values);

// filter() - filter out items from the existing array that which matches the condition

const filteredData = userData.filter(
  (abc) => abc.city == "mumbai" && abc.age < 50
);
console.log(filteredData);

// forEach and map - it will create function for each item in the array
userData.map((user, key) => {
  if (user.age > 50) {
    user.isSenior = true;
  } else {
    user.isSenior = false;
  }
});

// concat() -  joining one array with another arrays
const newArray = values.concat(userData, [70, 66]);
console.log(newArray);

// every()- every element in the array passes the condition
const check = userData.every((x) => x.age < 60);
console.log(check);

// some() - atleast some statement will pass the condition
const checkSome = values.some((x) => x === 200);
console.log(checkSome);

// fill() - fill every value in the array with default / static values

const newValue = [20, 40, 50, 33, 45, 200, 500];
// newValue.fill("abc");
// const newdata = newValue.map((x, key) => {
//   if (key > 1) {
//     x = 500;
//   }
//   return x;
// });
console.log(newValue);

// from() - create string to array
const ex = "apple";
const exb = Array.from(ex);
console.log(exb);

// reduce() - reduce the items by handing the operation in the array
const newAr = newValue.reduce((total, value) => {
  return total - value;
});
console.log(newAr);

// reverse() -
// console.log(newValue.reverse());

// includes() - checks if the array contains the specified value in the list
console.log(newValue.includes(40));

// find() finds and returns  the value of the first element that satisfies the condition
const newArr = [20, 100, 11, 33, 88, 99, 11];
const findV = newArr.find((x) => x > 20);
console.log(findV);

// indexOf() find the index of the particular value of an element in the array
console.log(newArr.indexOf(400));

// slice() returns the part of the array - create new array - from the existing array
console.log(newArr.slice(1, 3));
console.log(newArr.toString());

// loop/ iterating - repitition of a particular function to every item in the array
console.log(userData);
for (let i = 0; i < userData.length; i++) {
  console.log(userData[i].city);
  if (userData[i].age <= 20) {
    userData[i].isNotAdult = true;
  } else {
    userData[i].isNotAdult = false;
  }
  console.log(userData);
}
console.log(newArr);
for (let m = 0; m < newArr.length; m++) {
  if (newArr[m] > 50) {
    console.log(newArr[m]);
  }
}

// while - the method gets iterated until the condition in the while statement is flase;
var count = 0;
while (count < 3) {
  count++;
  // console.log(count);
}

// do while - "do" is a method that handled the operation first and then then the while statement checks for the condition.
// if the condition in the while statement getz false, then the iteration will stop in the do statement

var counter = 0;
do {
  counter++;
  console.log(counter);
} while (counter < 5);
{
}
