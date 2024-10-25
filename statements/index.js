// Statement (Condition check)

// ES5
// 1. If else , 2. switch case

// 1. If Else Statement
// Syntax
// if (condition) {
//   // do this
// } else {
//   // do that
// }

// Write a program to check if user is male or female and alert on the basis of their gender

// const gender = confirm("Are you male?");
// console.log(gender);
// if (gender) {
//   alert("You are male");
// } else {
//   alert("You are female");
// }

// Switch case (Multiple conditions)

// const day = prompt("What day is today?"); // sun, mon, tues, wednes, thurs, fri, sat

// switch (day) {
//   case "sun":
//     alert("Today is Sunday");
//     break;
//   case "mon":
//     alert("Today is Monday");
//     break;
//   case "tues":
//     alert("Today is Tuesday");
//     break;
//   default:
//     alert("Invalid day");
// }

// Write a js program to check the user grade
// >80 => Your grade is distinction
// 70-80 => Your grade is A
// <70 => You failed

// const userScore = Number(prompt("What is your score?"));
// switch (true) {
//   case userScore > 80:
//     alert("Your grade is distinction");
//     break;
//   case userScore >= 70:
//     alert("Your grade is A");
//     break;
//   case userScore < 70:
//     alert("You failed");
//     break;
//   default:
//     alert("Invalid user score");
// }

// ES6
// Ternary Operator

// Write a ternary operator to alert gender

const myGender = prompt("what is your gender(m/f)?"); // true/ false

// if (myGender) {
//   alert("You are male");
// }else{}

//condition ? true statement : false statement

// if else check => myGender === "m" ? alert("You are male") : alert("You are female");

// switch case using ternary operator

// g => m
// g => f
// g => o
// g => random value

myGender === "m"
  ? alert("You are male")
  : myGender === "f"
  ? alert("You are female")
  : myGender === "o"
  ? alert("You are Other")
  : alert("Wrong gender");

// Write a js program to tell the part of the day using the time provided by user

// Good Morning => 5 - 12
// Good Afternoon => 12 - 3
// Good Evening => 3 - 6
// Good night => 6-11
