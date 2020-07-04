// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions

// ES6: Use Arrow Functions to Write Concise Anonymous Functions

/**
 * arrow function expression is a syntactically compact alternative to a regular function expression,
   although without its own bindings to the keywords.
 * arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code.
 * This helps simplify smaller functions into one-line statements
 */
const magic = () => new Date();

/**
 * generally the code is as follows:
    const magic = function () {
        "use strict";
        return new Date();
    };

    ==> this can be replaced as:
        const magic = () => {
            "use strict";
            return new Date();
        };
 */
