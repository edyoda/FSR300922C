// How do you find the missing number in a given integer array of 1 to 100?

var num = [1, 3, 5, 7, 8, 9];
10;
var actualList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var missingNum = [];
var count = 10;
if (num.length === 9) {
  // sum of actualList - sum of num
  //  actual missing no
} else {
  for (var i = 1; i <= count; i++) {
    // if(num.indexOf(i) === -1) {

    // }
    if (!num.includes(i)) {
      missingNum.push(i);
    }
    // if (actualList[i + 1] - num[i] !== 1) {
    //   missingNum.push(actualList[i]);
    // }
  }
  console.log(missingNum);
}

// 2. How do you find the duplicate number on a given integer array?
var duplicateNumsList = [10, 30, 90, 100, 30, 100];
var repeatList = duplicateNumsList.filter(
  (x, i) => duplicateNumsList.indexOf(x) !== i
);

// 3. How do you find the largest and smallest number in an unsorted integer array?
var unsorted = [20, 400, 30, 55, 800, 68];

// sorting can be tried like this
console.log(
  unsorted.sort(function (a, b) {
    return a - b;
  })
);

// sorting ends
var minNum = unsorted[0];
var maxNum = unsorted[0];

for (var i = 0; i < unsorted.length; i++) {
  if (unsorted[i] > maxNum) {
    maxNum = unsorted[i];
  } else if (unsorted[i] < minNum) {
    minNum = unsorted[i];
  }
}
console.log(minNum, maxNum);

// How do you find all pairs of an integer array whose sum is equal to a given number?
var newList = [1, 3, 4, 5, 7, 9, 10];
var sum = 10;
var counter = 0;
var pairList = [];
for (var i = 0; i < newList.length; i++) {
  for (x = i + 1; x < newList.length; x++) {
    if (newList[i] + newList[x] === sum) {
      const newArr = [newList[i], newList[x]];
      pairList.push(newArr);
      counter++;
    }
  }
}
console.log(counter);
console.log(pairList);

var word1 = "listening";
var word2 = "silent";
console.log(
  word1.split("").sort().join("") === word2.split("").sort().join("")
);

// How can a given string be reversed using recursion?
function recursionCheck() {
  var name = "chitra";
  name = name.split("");
  var newName = [];
  name.forEach((n) => {
    newName.unshift(n);
  });
  console.log(newName.join(""));
}

recursionCheck();

// How do you check if a string contains only digits?
var numString = "432sdsds432";
console.log(Number(numString).toString() === numString);
numString = numString.split("");
// numString.forEach((num) => {
//   const numValue = Number(num);
//   if (!isNaN(numValue)) {
//     console.log("number exists in string", num);
//   }
// });

var vowelCount = 0;
var vowels = ["a", "e", "i", "o", "u"];
var checkString = "testing";
checkString = checkString.split("");
vowels.forEach((x) => {
  if (checkString.includes(x)) {
    vowelCount++;
    console.log(vowelCount);
  }
});
console.log("consonents", checkString.length - vowelCount);

var repeatedList = "successful";

listRepeat = repeatedList.split("");
var repeatLists = [];
for (var i = 0; i < listRepeat.length; i++) {
  if (
    listRepeat.indexOf(listRepeat[i]) !== listRepeat.lastIndexOf(listRepeat[i])
  ) {
    if (repeatLists.length !== 0 && !repeatLists.includes(listRepeat[i])) {
      repeatLists.push(listRepeat[i]);
    } else if (repeatLists.length === 0) {
      repeatLists.push(listRepeat[i]);
    }
  }
}
console.log(repeatLists);
// finding occurance of the characters
for (var i = 0; i < repeatLists.length; i++) {
  var repeatCount = 0;
  for (x = 0; x < repeatedList.length; x++) {
    if (listRepeat[i] === repeatedList[x]) {
      repeatCount++;
    }
  }
  console.log(repeatedList[i], repeatCount);
}

// finding permutation
var list = [];
function printPermutations(str, res = "") {
  if (!str.length) {
    list.push(res);
  }

  for (let i = 0; i < str.length; i++) {
    let remStr = str.substr(0, i) + str.substr(i + 1);
    printPermutations(remStr, res + str.substr(i, 1));
  }
}
printPermutations("abc");
console.log(list);
