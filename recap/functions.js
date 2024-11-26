// Function > engine that takes input and gives output

// Write a js function to calculate area of rectangle

// Step 1>  Remember function syntax
// Step 2> name the function
// Step 3> define the inputs (parameters)
// Step 4> write your logic (l*b)
// Step 5> Return the output

// ES5

// Function define / function initialization
function area(length, breadth) {
  const result = length * breadth;
  return result;
}
// Function call
const myArea = area(5, 10);
console.log(myArea);

// ES6
// Function define / function initialization
const es6Area = (len, bre) => {
  const result = len * bre;
  return result;
};
// Function call
const myAreaES6 = es6Area(5, 10);
console.log(myAreaES6);

// Write a es6 function to check the age group based on the age of the person

// baby 0-2
// young adults 3-39
// middle aged adults 40-59
// old adults 60-99

// Seniors Engineer considers edge cases 100>=

// 0 => baby
const ageGroup = (age) => {
  const ageNum = Number(age);
  if (ageNum >= 100) return "Old aged";
  const ageG =
    ageNum > 0 && ageNum <= 2
      ? "baby"
      : ageNum >= 3 && ageNum <= 39
      ? "young adults"
      : ageNum >= 40 && ageNum <= 59
      ? "middle aged adults"
      : "old adults";
  return ageG;
};

console.log(ageGroup(100));

// default function
// parameterized function
// implicit function
// explicit function
// callback function
// Closure

// default function
const defaultFun = (name = "guest") => {
  return name === "raktim" ? "Welcome admin" : `Welcome ${name}`;
};
console.log(defaultFun("raktim"));

const parameterizedFunction1 = (l, b) => {
  console.log(l);
  return l * b;
};

const parameterizedFunction2 = ({ b, h, e, g, l }) => {
  console.log(l);
  return l * b * h * e * g;
};

console.log(parameterizedFunction1(3, 5));
console.log(parameterizedFunction2({ l: 5, b: 3, h: 1, e: 4, g: 2 }));

const impFunction = (l) => l * l;
// RWE: utility function

console.log(impFunction(4));

const expFunction = (l) => {
  return l * l;
};

// callback function > if a function takes another function as a parameter,

const fun1 = (num) => {
  const result = num % 2 === 0 ? "even" : "odd";
  return `${num} is a ${result} number`;
};

const fun2 = (num, cb) => {
  return cb(num);
};

console.log(fun2(5, fun1));

// Closure

const closure = (value = 0) => {
  let count = value;
  return () => {
    return count++;
  };
};

// Function can return value
// Function can accept function as parameter and return the value
// Function can accept input and return function as an output => closure

const counterA = closure(9);
const counterB = closure();

console.log(counterA());
console.log(counterA());
console.log(counterA());
console.log(counterA());

console.log(counterB());
console.log(counterB());
console.log(counterB());

// https://github.com/rakimsth/basic-js-exercise/blob/main/js_exercise/function.md
