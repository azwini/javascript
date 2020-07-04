// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/mutate-an-array-declared-with-const

// ES6: Mutate an Array Declared with const

/**
 * `const` is another way of declaring variable
 * but is only read-only, which means is a constant value, which means once variable assigned with `const` cannot be reassigned
 */
const s = [5, 7, 2]; // passing array values to variable `s`

// Initialize `editInPlace` function
function editInPlace() {
    // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
    // Declared at the beginning of a script, it has global scope.
    // It helps you to write cleaner code, like preventing you from using undeclared variables.
    'use strict';

    /**
     * array values of `s` can't be changed as it is declared with keyword `const`
     * hence forth to change the array values, each individual index value has to be specified as given below
     */
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;

    console.log(s); // prints [2, 5, 7]
}
editInPlace(); // Invoke the function
