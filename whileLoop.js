// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-with-javascript-while-loops

// Basic JavaScript: Iterate with JavaScript While Loops

/**
 * a code can run multiple times by using a loop
 * loops --> `while`, `for`, `do-while`
 * while loop --> uses `while` condition, where the condition executes when true and terminates when false
 */

// passing an empty array to variable `myArray`
var myArray = [];
// initializing `0` to variable `i`
var i = 0;
// using while loop, giving a condition to run code if `i` is less than `5`
while (i < 5) {
    // if `while` condition is satisfied, `i` is incremented each time and `.push(i)` is done on myArray, hence adding items to end of array
    myArray.push(i);
    i++;
}

// gives empty array
// while(i>5){
//     myArray.push(i);
//     i++;
// }

// [0,1,2,3,4]
console.log(myArray);
