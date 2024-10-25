// Operators are used for handling multiple conditions at once
// Syntax: AND, OR, NOT
// Symbols: &&, ||, !

// const hasNagarita = confirm("Do you have a nagarita?"); // true / false
// const hasNID = confirm("Do you have a National ID?"); // true / false
// const age = confirm("Are you above 18 years old?"); // true / false

// // // ES5
// // if (hasNagarita && age) {
// //   alert("You are eligible to own a driving license");
// // } else {
// //   alert("You are underage");
// // }

// // ES6 (Ternary Operator)

// (hasNagarita || hasNID) && age
//   ? alert("You are eligible to own a driving license")
//   : alert("You are underage");

const user = prompt("What is your username?");

if (user != "raktim") {
  // String literals => Dynamic Variable Print
  // ES6
  alert(`Welcome ${user}`);
  alert();
} else {
  alert("Welcome admin");
}
