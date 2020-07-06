// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place

// ES6: Use the Spread Operator to Evaluate Arrays In-Place

/**
 * Spread syntax allows an an array expression or string to be expanded in places where zero or more arguments (for
   function calls) or elements(for array literals) are expected, or an object expression to be expanded in places where
   zero or more key - value pairs(for object literals) are expected.
 */
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']; // passing array of values to `arr1`
let arr2; // initializing `arr2`

(function () {
  // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
  // Declared at the beginning of a script, it has global scope.
  // It helps you to write cleaner code, like preventing you from using undeclared variables.
  "use strict";
  arr2 = [...arr1]; // passing on `arr1` values to `arr2`
})();

console.log(arr2); // prints `['JAN', 'FEB', 'MAR', 'APR', 'MAY']`
