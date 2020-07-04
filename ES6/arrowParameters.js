// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/write-arrow-functions-with-parameters

// ES6: Write Arrow Functions with Parameters

/**
 * arrow function expression is a syntactically compact alternative to a regular function expression,
   although without its own bindings to the keywords.
 * arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code.
 * This helps simplify smaller functions into one-line statements
 */

// declare variable `myConcat` with array's
const myConcat = (arr1, arr2) => {
    // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
    // Declared at the beginning of a script, it has global scope.
    // It helps you to write cleaner code, like preventing you from using undeclared variables.
    "use strict";

    // The concat() method is used to join two or more arrays.
    return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5])); // prints `[ 1, 2, 3, 4, 5 ]`
