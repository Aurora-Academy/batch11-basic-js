console.log("Objects");
// Representation for real world individual item
// Complex Data type

// 4 operations CRUD (Create, Read, Update, Delete)

// 1. Create
// Syntax: {}, new Object();

// ES5
const empt = new Object(); // Empty Object

// ES6
// const empt = {}; // Empty Object

const person = {
  // property = key value pair
  name: "Raktim Shrestha",
  year: 1992,
  isAdult: true,
  phone: {
    office: 123456,
    personal: 123456,
  },
  age_es5: function () {
    return 2024 - this.year;
  },
  age_es6: () => 2024 - person.year,
};

console.log(person);

// 2. Read
// We will use dot notation (.)

console.log(person.name);
console.log(person.age_es5());
console.log(person.age_es6());
console.log(person.phone.office);

// 3. Update

person.name = "Raktim Kumar Shrestha";
person.isTeacher = true;

console.log(person);

//4. Delete

// ES5
// delete person.phone;
// console.log(person);
// Why not use this??
// Because object deletion can cause application failure because datas are main source for application

// ES6
// Object Destructure & Spread Operator
// Object Assignment/ Reassignment

const { phone, ...rest } = person;
console.log(rest);

// How can i add default value to the spread operation result??

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment

/*
a. Find the value of the price property and if it is greater than 100, discount it by 10%. 
If that’s not the case, discount it by 7%. Update the object with the new property - discount 
and the corresponding value (7% or 10%) and the new price.

Use given object and loop through its properties and 
if it has property “discount” print “Already discounted by…” 
and add the value (how much was the discount). 
In opposite case, do what you did in the previous exercise: check the price, depending on it (if it’s greater or lower than 100) add discount (10% or 7%) and add the property “discount” to the object.

let prod = {
name: "headphones",
price: 83.7,
};

End result should be like this >>

// end result - case 1:
// { name: 'headphones', price: '77.84', discount: '7%' }

// end result - case 2:
// Already discounted by 7%.
*/

const product = {
  name: "headphones",
  price: 83.7,
};

const { price, ...newProd } = product;

newProd.price =
  Number(price) > 100
    ? (Number(price) - 0.1 * Number(price)).toFixed(2)
    : (Number(price) - 0.07 * Number(price)).toFixed(2);

newProd.discount = Number(price) > 100 ? "10%" : "7%";

console.log(newProd);

// End result - case 2:
// Already discounted by 7%.
// Loop into new result and console it

const car1 = { name: "Tesla", model: "Cybertruck", year: 2024 };
const car2 = { name: "Tesla", model: "Cybertruck", year: 2024 };

// Write a js function to compare two objects for equality and return boolean result
// console.log(areObjectsEqual(car1, car2)) // true, false

// Immutable JS (Array)
