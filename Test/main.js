console.log("Starting javascript...");
let myName = "Micha";
console.log(myName);
let age = 32;
console.log(age);
let juliaAge = 32;
let ageDiff = age - juliaAge;
console.log(ageDiff);

if (age < 21) {
  console.log("you are younger than 21");
} else {
  console.log("you are older than 21;");
}

if (age !== juliaAge) {
  if (age < juliaAge) {
    console.log("Julia is older than you");
  } else {
    console.log("Julia is younger than you");
  }
} else {
  console.log("You have the same age as Julia");
}

let course = ["thair", "nicolas", "rafal", "helene", "Micha"];
console.log(course[0]);
console.log(course[course.length - 1]);
for (let i = 0; i < course.length; i++) {
  console.log(course[i]);
}
let courseAge = [28, 25, 33, 40, 30];
let x = 0;
while (x < courseAge.length) {
  if (courseAge[x] % 2 == 0) {
    console.log(courseAge[x]);
  }
  x++;
}
for (let j = 0; j < courseAge.length; j++) {
  if (courseAge[j] % 2 == 0) {
    console.log(courseAge[j]);
  }
}
let y = 0;
for (let i = 0; i < courseAge.length; i++) {
  y += courseAge[i];
}
console.log(y);
let z = 0;
for (let i = 0; i < courseAge.length; i++) {
  if (courseAge[i] % 2 == 0) {
    z += courseAge[i];
  }
}
console.log(z);
let a = 0;
for (let i = 0; i < courseAge.length; i++) {
  if (i % 2 == 0 && i !== 0) {
    a += courseAge[i];
  }
}
console.log(a);

function multiCon() {
  console.log(2 * 3);
}

multiCon();

function multi() {
  return 3 * 3;
}
let res = multi();
console.log(res);

function multiWPara(num1, num2) {
  return num1 * num2;
}
let res2 = multiWPara(1, 3);
console.log(res2);
let res3 = multiWPara(4, 4);
console.log(res3);
let res4 = multiWPara(5, 5);
console.log(res4);

//Exercise 15
function triangle(a, b, c) {
  if (a === b && b === c && a === c) {
    return "Equilateral Triangle";
  } else if (a === b || a === c || b === c) {
    return "Isosceles Triangle";
  } else {
    return "Scalene triangle";
  }
}
let equi = triangle(2, 2, 2);
console.log(equi);
let isos = triangle(1, 2, 2);
console.log(isos);
let scal = triangle(1, 2, 3);
console.log(scal);

// Exercise 16
let numbers = [40, 100, 1, 5, 25, 10];
numbers.sort(function (a, b) {
  return a - b;
});
console.log(numbers[0]);
let numbers2 = [40, 100, 1, 5, 25, 10];
numbers2.sort(function (a, b) {
  return a - b;
});
numbers2.reverse();
console.log(numbers2[0]);

// Exercise 17
function arrayPlace(array, index) {
  return array[index];
}
const array = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100,
];
const index = 1;
let res5 = arrayPlace(array, index);
console.log(res5);

// Exercise 18
function arrayToString(array) {
  let res;
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      res = array[i] + " ";
    } else {
      res += array[i] + " ";
    }
  }
  return res;
}
const myColor = ["Red", "Green", "White", "Black"];
console.log(arrayToString(myColor));

//Exercise 19

function reverseNumber(number) {
  let res;
  let arr = number.toString().split("");
  arr.reverse();
  for (let i = 0; i < arr.length - 1; i++) {
    if (i == 0) {
      res = arr[i];
    } else {
      res += arr[i];
    }
  }
  return res;
}
const revNumber = 123456;
console.log(reverseNumber(revNumber));

//Exercise 20

function alphabeticalSort(word) {
  let arr = [];
  arr = word.split("");
  word = arr.sort().toString();
  let res = word.replace(/,/g, "");
  return res;
}
const word = "webmaster";
console.log(alphabeticalSort(word));

//Exercise 21
function longestWordInString(sentence) {
  let arr = sentence.split(" ");
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i].length);
  }
  arr2.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === arr2[arr2.length - 1]) {
      return arr[i];
    }
  }
}
const sentence = "Web Development Tutorial";
console.log(longestWordInString(sentence));

//Exercise 22

function stringReplace(word) {
  let res = word.replace(/a/g, "1");
  return res;
}
const word1 = "JavaScript";
console.log(stringReplace(word1));

//Exercise 23

function firstLetterUpper(string) {
  let arr = string.split(" ");
  let str;
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      str = arr[i][0].toString().toUpperCase();
      for (let j = 1; j < arr[i].length; j++) {
        str += arr[i][j].toString();
      }
      str += " ";
    } else {
      str += arr[i][0].toString().toUpperCase();
      for (let j = 1; j < arr[i].length; j++) {
        str += arr[i][j].toString();
      }
      if (i != arr.length - 1) {
        str += " ";
      }
    }
  }
  return str;
}
const prince = "prince of persia";
console.log(firstLetterUpper(prince));

//Exercise 24

function evenNumbers(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    if (i % 2 == 0 && i != 0) {
      arr.push(i);
    }
  }
  return arr;
}
let ex = 9;
console.log(evenNumbers(ex));

//Exercise 25

function oddNumbers(num1, num2) {
  const arr = [];

  for (let i = 0; i <= num2; i++) {
    if (i % 2 != 0 && i >= num1) {
      arr.push(i);
    }
  }
  return arr;
}
num3 = 1;
num4 = 13;
console.log(oddNumbers(num3, num4));

//Exercise 26

function repeatArray(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    for (let x = i + 1; x < array.length; x++) {
      if (array[i] === array[x]) {
        arr.push(array[i]);
      }
    }
  }
  return arr;
}
var array2 = [
  3,
  6,
  67,
  6,
  23,
  11,
  100,
  8,
  93,
  0,
  17,
  24,
  7,
  1,
  33,
  45,
  28,
  33,
  23,
  12,
  99,
  100,
];
console.log(repeatArray(array2));

//Exercise 27
function myList(array) {
  const list = document.getElementById("band-list");
  for (let i = 0; i < array.length; i++) {
    const newLi = document.createElement("li");
    list.appendChild(newLi);
    newLi.textContent = myBandList[i];
  }
}

const myBandList = ["Dire Straits", "Kansas", "Steely Dan"];
myList(myBandList);

//Exercise 28
function multTableWithoutResults(rows, cols) {
  let posi = document.querySelector("h1");
  const tab = document.createElement("table");
  tab.style.border = "1px solid red";
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    let rowTD = document.createElement("td");
    rowTD.innerHTML = i;
    tab.appendChild(row);
    row.appendChild(rowTD);
    for (let j = 0; j < cols; j++) {
      let col = document.createElement("td");
      col.innerHTML = j + 1;
      row.appendChild(col);
    }
  }

  posi.after(tab);
}
//multTableWithoutResults(3, 2);

function multTable(rows, cols) {
  let posi = document.querySelector("h1");
  const tab = document.createElement("table");
  tab.style.borderCollapse = "collapse";
  for (let i = 0; i < rows; i++) {
    let row = document.createElement("tr");
    let rowTD = document.createElement("td");
    row.id = i;
    rowTD.innerHTML = i;
    if (row.id % 2 === 0) {
      row.style.backgroundColor = "orange";
    }
    tab.appendChild(row);
    row.appendChild(rowTD);

    for (let j = 0; j < cols; j++) {
      let rowCell = document.createElement("td");
      //für die Headline
      if (i === 0) {
        rowCell.innerHTML = j + 1;
      } else {
        let x = j + 1;
        rowCell.innerHTML = x * i;
      }

      rowCell.style.textAlign = "center";
      row.appendChild(rowCell);
    }
  }
  posi.after(tab);
}
multTable(5, 8);
