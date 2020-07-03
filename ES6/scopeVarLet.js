// https: //www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/compare-scopes-of-the-var-and-let-keywords

// ES6: Compare Scopes of the var and let Keywords

// Initialize checkScope function
function checkScope() {
    // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
    // Declared at the beginning of a script, it has global scope.
    // It helps you to write cleaner code, like preventing you from using undeclared variables.
    'use strict';

    let i = 'function scope'; // declaring `i` with `function scope`
    if (true) {
        let i = 'block scope'; // `i` in if statement to be `block scope`
        console.log('Block scope i is: ', i); // prints `Block scope i is:  block scope`
    }
    // end of if statement
    console.log('Function scope i is: ', i); // prints `Function scope i is:  function scope`
}
checkScope(); // Invoke the function
