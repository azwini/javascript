// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-with-the-rest-parameter-to-reassign-array-elements

// ES6: Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements

// passing array of values to `source`
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function removeFirstTwo(list) {
    // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
    // Declared at the beginning of a script, it has global scope.
    // It helps you to write cleaner code, like preventing you from using undeclared variables.
    "use strict";
    /**
    * Variables a and b take the first and second values from the array.
    * After that, because of the rest parameter's presence, arr gets the rest of the values in the form of an array.
    * The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.
    */
    const [a, b, ...arr] = list;

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr); // prints `[3, 4, 5, 6,7, 8, 9, 10]`
