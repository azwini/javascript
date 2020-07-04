// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/prevent-object-mutation

// ES6: Prevent Object Mutation

// Initialize `freezeObj` function
function freezeObj() {
    // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
    // Declared at the beginning of a script, it has global scope.
    // It helps you to write cleaner code, like preventing you from using undeclared variables.
    'use strict';
    // declaring `MATH_CONSTANTS` with object `PI`
    const MATH_CONSTANTS = {
        PI: 3.14
    };

    /**
     * Object.freeze() method freezes an object.
     * A frozen object can no longer be changed.
     * freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing properties.
     * freeze() returns the same object that was passed in.
     */
    Object.freeze(MATH_CONSTANTS);

    // `try` statement allows you to define a block of code to be tested for errors while it is being executed.
    try {
        MATH_CONSTANTS.PI = 99;
    }
    // `catch` statement allows you to define a block of code to be executed, if an error occurs in the `try` block.
    catch (ex) {
        console.log(ex);
    }

    // return MATH_CONSTANTS.PI;
    console.log(MATH_CONSTANTS); // prints `{ PI: 3.14 }`
}
const PI = freezeObj(); // Invoke the function
