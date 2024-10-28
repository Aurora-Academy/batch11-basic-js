console.log("Functions");

// Main building block of a program

// Write a function to calculate the sum of 2 numbers

// BASIC JS
const a = 1;
const b = 3;
const sum = a + b;
console.log(sum);

// ES5

// Write a function to calculate the area of rectangle (l*b)

// const len = Number(prompt("What is length?"));
// const breadth = Number(prompt("What is breadth?"));

// function calcArea(l, b) {
//   const result = l * b;
//   return result;
// }

// const area = calcArea(len, breadth);
// console.log(area);

// // Function Declaration
// function add(a, b) {
//   const sum = a + b;
//   return sum;
// }

// // Function call / Execution
// const result = add(1, 3);
// console.log(result);

// // ES6 (Arrow Function)

// // Function Declaration
// const addES6 = (a, b) => {
//   const sum = a + b;
//   return sum;
// };

// Function call / Execution
// const resultEs6 = addES6(1, 3);
// console.log(resultEs6);

/* 

Multiple types of functions
1. Parameterized Function
2. Arrow Function
3. Default Function
4. Closure
5. IIFEs
6. Callback Function
7. Pure Function
8. Anonymous Function
9. Explicit Function
10. Implicit Function
*/

// 1. Parameterized Function
// If the parameter is passed to the function, its called parameterized function
// What if there are multiple parameters?

// If you are using more than 2 parameters, wrap parameters in a function with curly braces

// const sumP = ({ a, b, c }) => {
//   const sum = a + b + c;
//   return sum;
// };

// const resultP = sumP({ a: 1, b: 0, c: 3 });
// console.log(resultP);

// // Create a function to calc volume for cuboid (l*b*h)

// // const fnName = ()=>{}

// const volume = ({ l = 10, b, h }) => {
//   const result = l * b * h;
//   return result;
// };

// const resultVol = volume({ b: 2, h: 2 });
// console.log(resultVol);

// // 2. Arrow Function

// // Syntax:  const FnName = ()=>{};

// // Area
// const areaArrow = (l, b) => {
//   const result = l * b;
//   return result;
// };

// const volumeArrow = ({ l, b, h }) => {
//   const result = l * b * h;
//   return result;
// };

// // Default Function
// // If the value of the parameter has to be defined in the beginning, Then we use default function

// // Real world Use case: Page list, Language default set, ...

// const welcomeUser = (userName = "user") => {
//   return `Welcome ${userName}`;
// };

// const pageList = (page = 1) => {
//   return `I am page number ${page}`;
// };

// console.log(welcomeUser("raktim"));
// console.log(welcomeUser("Bishal"));
// console.log(welcomeUser("Vikash"));
// console.log(welcomeUser("Sunil"));
// console.log(welcomeUser("Zeeson"));
// console.log(welcomeUser());

// console.log(pageList());
// console.log(pageList(2));

// // Write a default function to handle the language change

// // 4. Closure

// // Closures are the functions that retain access to the variables
// // from their containing scope even after the parent function has finished executing

// const counterModule = () => {
//   let count = 0;
//   return () => {
//     const result = count++;
//     return result;
//   };
// };

// const dashainCounter = counterModule();
// console.log(dashainCounter());
// console.log(dashainCounter());
// console.log(dashainCounter());
// console.log(dashainCounter());

// const TiharCounter = counterModule();
// console.log(TiharCounter());
// console.log(TiharCounter());
// console.log(TiharCounter());

// 3 Use cases of Closures
// 1. Partial Application and Currying
// 2. Private Variables in Modules; Setup private variable inside the function like userPassword, env variables
// 3. Event Handling Eg Track Button Click (Mouse Click)

// 5. IIFEs (Immediately Invoked Functional Expressions)

(() => {
  console.log("I am IIFEs");
})();

// Use Case: Run a script first in the website
// USe Case: DevOps Engineer, Load the dummy data in the site

//6. Callback Function
// If a function is passed as a parameter, its called callback function

const printFn = (result) => {
  console.log(`Callback Multiplication result is ${result}`);
};

// callback
const multiply = ({ a, b, fn }) => {
  const res = a * b;
  fn(res); // printFn(res)
};

multiply({ a: 2, b: 3, fn: printFn });

// 7. Pure Function
// If the result doesn't change for the input, the function is called pure function
// Utilities Function(comma separator 10000=>10,000 ; Name Splitter; Date Converter, km to m converter )

//8. Anonymous Function

// If there is no name in the function, its called Anonymous function / Nameless Function

const hi = function () {
  console.log("Hi");
};
hi();

const hello = () => {
  console.log("hello");
};

hello();

//9. Explicit Function

// If the return keyword is used, its called Explicit Function

const subtract = (a, b) => {
  return a - b;
};

// 10. Implicit Function

const sub = (a, b) => a - b;
const area = (l, b) => l * b;
const add = (a, b) => a + b;

console.log(area(3, 3));
