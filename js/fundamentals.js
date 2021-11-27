`use strict`;

// If Else Conditions

const avgCars = (40 + 50 + 60) / 3;
const avgBikes = (70 + 80 + 90) / 3;
console.log(avgCars);
console.log(avgBikes);

if (avgCars > avgBikes) {
  console.log("avgCars wins the trophy");
} else if (avgBikes > avgCars) {
  console.log("avgBikes wins the trophy");
} else {
  console.log("No one wins the trophy");
}

// Switch Statements

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Its Monday");
    break;

  case "Tuesday":
    console.log("Its Tuesday");
    break;

  case "Wednesday":
    console.log("Its Wednesday");
    break;

  default:
    console.log("Not a valid day");
}

// Conditional Ternary Operators

const age = 18;

age >= 18 ? console.log("Access Granted") : console.log("Access Denied");

const drink = age >= 18 ? "Wine" : "Water";
console.log(`You can drink ${drink}`);

// Function

// Juice Maker Function

function mixer(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges`;
  return juice;
}

const appleJuice = mixer(3, 0);
const orangeJuice = mixer(0, 4);
console.log(appleJuice);
console.log(orangeJuice);

// Vehicle Collection Function

function vehicles(cars, bikes) {
  const showroom = `This showroom has ${cars} cars and ${bikes} bikes`;
  return showroom;
}

const showroom1 = vehicles(8, 3);
const showroom2 = vehicles(12, 8);
console.log(showroom1);
console.log(showroom2);

// Function Declaration

// Planes Count Function using Function Declaration

function planes1(spicejet, goair) {
  const airport = `This airport has ${spicejet} Spicejet and ${goair} GoAir flights`;
  return airport;
}

const airport1 = planes1(5, 8);
const airport2 = planes1(12, 7);
console.log(airport1);
console.log(airport2);

// Age Calculation Function using Function Declaration

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

const age1 = calcAge1(1993);
console.log(age1);

// Function Expression

// Planes Count Function using Function Expression

const planes2 = function (spicejet, goair) {
  const airport = `This airport has ${spicejet} Spicejet and ${goair} GoAir flights`;
  return airport;
};

const airport3 = planes2(14, 6);
const airport4 = planes2(4, 9);
console.log(airport3);
console.log(airport4);

// Age Calculation Function using Function Expression

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
};

const age2 = calcAge2(1990);
console.log(age2);

// Arrow Functions - excluding {} brackets and return keyword usefull for only one line of code

// Planes Count Function using Arrow Functions

const planes3 = (spicejet, goair) => {
  const airport = `This airport has ${spicejet} Spicejet and ${goair} GoAir flights`;
  return airport;
};

const airport5 = planes3(6, 9);
const airport6 = planes3(8, 5);
console.log(airport5);
console.log(airport6);

// Age Calculation Funtion using Arrow Functions

const calcAge3 = (birthYear) => 2021 - birthYear;
const age3 = calcAge3(1991);
console.log(age3);

// Retirement Years Function using Arrow functions

const yearsToRetire = (firstname, birthyear) => {
  const age = calcAge3(birthyear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstname} retires in ${retirement} years`);
  } else {
    console.log(`${firstname} has already retired`);
  }
};

yearsToRetire("Mark", 1990);

// Arrays - Data Structure Containers to store the value using ['']

const friends = ["Steven", "Michael", "John"];
console.log(friends);

// Accessing Array Elements
console.log(friends[0]);
console.log(friends[2]);

// Length of an Array
console.log(friends.length);
console.log(friends[friends.length - 2]);

// Array Mutation - Chaning values of the array

friends[1] = "Mark";
console.log(friends);

// Basic Array Methods

// Add element at the end of the array
friends.push("Joe");
console.log(friends);

// Add element at the begining of the array
friends.unshift("Carl");
console.log(friends);

// Remove element at the end of the array
friends.pop();
console.log(friends);

// Remove element at the begining of the array
friends.shift();
console.log(friends);

// To know removed element from an array
const autoCompany = ["BMW", "Lamborghini", "Audi", "Ferrari", "Mercedes"];
const popped = autoCompany.pop();
const shifted = autoCompany.shift();
console.log(popped);
console.log(shifted);

// To know the position of the element in the array
const people = ["Shawn", "Mitchelle", "Martin", "Alexa"];
console.log(people.indexOf("Mitchelle"));
console.log(people.indexOf("Martin"));

// To check if an element is present in the array (Results in True or False) - ES6 Feature
console.log(people.includes("Shawn"));
console.log(people.includes("Martin"));
console.log(people.includes("Steve"));
console.log(people.includes("shawn"));

// Objects - Data Structure Containers to store the value using {key: value,}

const john = {
  firstName: "John",
  lastName: "Smith",
  age: 2021 - 1992,
  job: "Developer",
  friends: ["Shawn", "Martin", "Steve", "Shawn"],
};

// Objection - Mutation, Getting data from an object

console.log(john);
console.log(john.firstName);
console.log(john.age);
console.log(john.friends[2]);
console.log(john["job"]); // Bracket Notation to fetch data

// Adding New Properties to the Objects

const mark = {
  firstName: "Mark",
  lastName: "Johnson",
  age: 2021 - 1990,
};

mark.job = "Programmer";
console.log(mark);

// Basic Object Methods

const steve = {
  firstName: "Steve",
  lastName: "Smith",
  birthYear: 1993,
  calcAge: function () {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  summary: function () {
    return `${this.firstName} ${this.lastName}'s age is ${this.calcAge()}`;
  },
};

steve.calcAge();
console.log(steve.age);
console.log(steve.summary());

// Iterations - For Loop (For loop keeps running till the condition is true)

for (let i = 0; i < 10; i++) {
  console.log(`This is ${i}`);
}

// Looping Arrays, Breaking and Continue

const markArray = [
  "Mark",
  "Johnson",
  1990,
  "Developer",
  ["Martin", "Steven", "Joseph"],
];

const types1 = [];
const types2 = [];

for (let i = 0; i < markArray.length; i++) {
  console.log(markArray[i], typeof markArray[i]);

  types1.push(typeof markArray[i]);
}

console.log(types1);

// Looping Backwards

for (let j = markArray.length - 1; j >= 0; j--) {
  console.log(j, markArray[j]);

  types2.push(typeof markArray[j]);
}

console.log(types2);

// Looping Example

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}

console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

console.log(calcAverage([2, 2, 2]));
console.log(calcAverage(tips));
console.log(calcAverage(totals));
