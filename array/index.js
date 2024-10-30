console.log("Array");

// CRUD

// 1. Create
// Empty Array create

// es6
const persons = [];

//es5
const persons_es5 = new Array();

console.log(persons);

// Real world data

const products = [
  {
    id: 21,
    title: "Cucumber",
    description:
      "Crisp and hydrating cucumbers, ideal for salads, snacks, or as a refreshing side.",
    category: "groceries",
    price: 1.49,
    discountPercentage: 11.44,
    rating: 4.71,
    stock: 22,
  },
  {
    id: 22,
    title: "Dog Food",
    description:
      "Specially formulated dog food designed to provide essential nutrients for your canine companion.",
    category: "groceries",
    price: 10.99,
    discountPercentage: 18.15,
    rating: 2.74,
    stock: 40,
  },
];

// 2. Read

const firstProduct = products[0];

// 3. Update

// change object property

// destructure assignment
const [first] = products;
const { title, ...rest } = first;
rest.title = "Cucumbers";

console.log(rest);

// Add new Object

// 1. easy way

products.push({ id: 3, title: "Raktim" });
console.log(products);

//4. Delete

// Destructure
const [a, second, third] = products;
const newArr = [a, second];

console.log(newArr, products);

// Use Array Method
// ??

// Write a js function that sorts the data in ascending order
// ["bishal", "vikash", "zeeson", "raktim"]

const nameSorter = (names) => {
  return names.sort();
};

console.log(nameSorter(["bishal", "vikash", "zeeson", "raktim"]));

// Write a js function to sort the data in ascending order using the users age
// [{name: "bishal", age: 22}, {name: "vikash", age: 25}, {name: "zeeson", age: 18}, {name: "raktim", age: 32}]

const ageSorter = (arr) => {
  const compareFn = (a, b) => b.citizenship - a.citizenship;
  return arr.sort(compareFn);
};

console.log(
  ageSorter([
    { name: "bishal", age: 22, citizenship: false },
    { name: "vikash", age: 25, citizenship: true },
    { name: "zeeson", age: 18, citizenship: false },
    { name: "raktim", age: 32, citizenship: true },
  ])
);

// Immutable JS
// map, filter, sort, reduce, every, some, find, includes

// https://github.com/jamesqquick/javascript-array-functions-practice

// Class will resume from Nov 20, 6:00 - 7.30 online class
