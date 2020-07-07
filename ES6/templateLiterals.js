// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/create-strings-using-template-literals

// ES6: Create Strings using Template Literals

/**
 * Template literal is a special type of string that makes creating complex strings easier.
 * allows to create multi - line strings.
 * Template literals are enclosed by the backtick(` `) character instead of double or single quotes.
 */

 // passing array of strings
const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};

// Initialize `makeList` function
function makeList(arr) {
    // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
    // Declared at the beginning of a script, it has global scope.
    // It helps you to write cleaner code, like preventing you from using undeclared variables.
    "use strict";
    // passing an empty array to `resultDisplayArray`
    const resultDisplayArray = [];
    // looping with `for` by initializing variable `i` with value `0`, giving condition (i<arr.length) and incrementing `i` if condition is true
    for (let i = 0; i < arr.length; i++) {
        // `push` will append data to the end of array
        /**
         * $ {variable} is a placeholder, used instead of `+` operator.
         */
        resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
    }
    return resultDisplayArray;
}
const resultDisplayArray = console.log(makeList(result.failure));
