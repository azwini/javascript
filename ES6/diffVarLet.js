// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/explore-differences-between-the-var-and-let-keywords

// ES6: Explore Differences Between the var and let Keywords

/**
 * keyword `var` can overwrite variabe declarations without any error
 * hence to avoid this, `let` keyword is used, which throws error
 */

let catName; // declaring variable catName
let quote; // declaring variable quote

// Initialize catTalk function
function catTalk() {
    // The purpose of `use strict` is to indicate that the code should be executed in strict mode.
    // Declared at the beginning of a script, it has global scope.
    // It helps you to write cleaner code, like preventing you from using undeclared variables.
    "use strict";

    catName = "Oliver"; // assigning `catName` with string `Oliver`
    quote = catName + " says Meow!"; // assigning `quote` with addition operation of `catName` & `says Meow!`

    console.log(catName); // prints `Oliver`
    console.log(quote); // prints `Oliver says Meow!`
}
catTalk(); // Invoke the function
