// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/declare-a-read-only-variable-with-the-const-keyword

// ES6: Declare a Read-Only Variable with the const Keyword


// Initialize printManyTimes function
function printManyTimes(str) {
    // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
    // Declared at the beginning of a script, it has global scope.
    // It helps you to write cleaner code, like preventing you from using undeclared variables.
    "use strict";

    /**
     *`const` is another way of declaring variable
     * but is only read-only, which means is a constant value, which means once variable assigned with `const` cannot be reassigned
     */
    const SENTENCE = str + " is cool!";
    // looping with `for` by initializing variable `i` with value `0`, giving condition (i<str.length) and incrementing `i` if condition is true
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE); // prints `freeCodeCamp is cool!`
    }
}
printManyTimes("freeCodeCamp"); // passing `str` value as `freeCodeCamp`
