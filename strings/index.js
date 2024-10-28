// Write a js function to join two words

const joinWords = (a, b) => a.concat(" ", b); // Implicit

console.log(joinWords("raktim", "shrestha"));

// Functional Chaining

/* 

Write a JavaScript implicit function to convert temperatures to and from Celsius, Fahrenheit.
[ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in Fahrenheit ]

Expected Output :
60°C is 140 °F
45°F is 7.222222222222222°C
*/

const tempConverter = (deg, type = "c") =>
  type === "c" ? `${(9 / 5) * deg + 32} F` : `${(5 * deg - 32 * 5) / 9} C`;

console.log(tempConverter(45, "f"));

// Write a js function that hides phone to prevent data leakage
// convert 9845160080 to 984.....80

// Write a js function that generates slug using title
// "Raktim Shrestha" => "raktim-shrestha"

const slugify = (str) =>
  str.toLowerCase().replaceAll(/[.’]/gi, "").replaceAll(" ", "-"); // Functional Chaining

console.log(
  slugify(
    "I used OpenAI’s o1 model to develop a trading strategy. It is DESTROYING the market"
  )
);

// Write a js function to generate the proper case for the given name
// raktim kumar shrestha => Raktim Kumar Shrestha

const properCase = (text) => {
  const splittedWords = text.split(" ");
  const upperCaseWords = splittedWords.map((word) =>
    word[0].toUpperCase().concat(word.substring(1, word.length))
  ); // Raktim
  const result = upperCaseWords.join(" ");
  return result;
};

const properCaseV2 = (text) =>
  text
    .split(" ")
    .map((word) => word[0].toUpperCase().concat(word.substring(1, word.length)))
    .join(" ");
console.log(properCaseV2("raktim kumar shrestha"));
