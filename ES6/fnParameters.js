// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/set-default-parameters-for-your-functions

// ES6: Set Default Parameters for Your Functions

/**
 * arrow function expression is a syntactically compact alternative to a regular function expression,
   although without its own bindings to the keywords.
 * arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code.
 * This helps simplify smaller functions into one-line statements
 */

// function `increment` is passed with parameters `number` & `value` with default value of `value` being `1`; with `addition` operation between parameters
const increment = (number, value = 1) => number + value;
console.log(increment(5, 2)); // returns `7`
console.log(increment(5)); // returns `6`
