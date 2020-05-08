// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-for-loops

// Basic JavaScript: Iterate with JavaScript For Loops

/**
 * for loop --> declared with three optional expressions separated by semicolons
 * i.e., for ([initialization];[condition];[final-expression])
 * --> `initialization` statement is executed only once before the loop starts. It defines and setup the loop variable
 * --> `condition` statement is evaluated at beginning of every loop iteration and will continue till the condition is true. If condition is false loop will not be executed
 * --> `final-expression` is executed at end of each loop iteration, prior to the next condition check and is usually used to increment or decrement loop counter
 */

// passing an empty array to variable `myArray`
var myArray = [];
// looping with `for` by initializing variable `i` with value `1`, giving condition (i<5) and incrementing `i` if condition is true
for (var i = 1; i < 5; i++) {
    // `.push(i)` is done on myArray, hence adding items to end of array
    myArray.push(i);
}

// [1,2,3,4]
console.log(myArray);
