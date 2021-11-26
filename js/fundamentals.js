"use strict";
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
