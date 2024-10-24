/*
8 Types
*/

//String
const name = "raktim";
console.log(name);

//Number
const pi = 3.1415;
console.log(pi);

// BigInt
const int = BigInt("123232323232323");
console.log(int);

// Undefined
let ex;
console.log(ex);

// Null
const x = null;
console.log(x);

// Boolean
const isMale = true;
const isFemale = false;
console.log(isMale, isFemale);

// Symbol
const person = Symbol("raktim");
console.log(person);

// Object
const raktim = { name: "raktim", age: 32, dob: "" };
console.log(raktim);

// Type Conversion / Type Coercion

// String => Number

const num = "8";
console.log(num);
const actualNum = Number(num); // Type Conversion
console.log(actualNum);
console.log(actualNum + 2);

// Number => String

const num2 = 8;
const stringNum = String(num2); // Type Conversion
console.log(stringNum + "2"); // "8"+"2"=> "82"
