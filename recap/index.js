// variables
// const , let

// Primitive Datatype : String, Number, Boolean
// Interactions: prompt(), alert(), confirm()

// Write a program that asks user for age and nagarita

const age = prompt("What is your age?"); //32
const doYouHaveNagarita = confirm("Do you have Nagarita?"); // true

// Operators / Statement

// Operator > 1. Math Operator 2. Logical Operator

// 1. AND Operator (&&) ===> condition1 && condition2
// 2. OR Operator (||)  ===> condition1 || condition2
// 3. NOT Operator (!)  ===> !condition

if (age >= 18 && doYouHaveNagarita) {
  // Do this
  alert("You are eligible to apply for driving license");
  // Ask user to fill up the category prompt
  const category = prompt("Which categories are you applying for? (A/B/C/K)"); // K
  //   alert("You have applied for " + category + "category");
  alert(`You have applied for ${category} category`);
} else {
  // do that
  alert("You are not eligible to apply for driving license");
}
