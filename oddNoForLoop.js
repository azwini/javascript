// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop

// Basic JavaScript: Iterate Odd Numbers With a For Loop


// passing an empty array to variable `myArray`
var myArray = [];
// to get odd numbers
// looping with `for` by initializing variable `i` with value `1`, giving condition (i<10) and incrementing `i` with `2` if condition is true
for (var i = 1; i < 10; i += 2) {
    // `.push(i)` is done on myArray, hence adding items to end of array
    myArray.push(i);
}

// to get even numbers
// looping with `for` by initializing variable `i` with value `0`, giving condition (i<10) and incrementing `i` with `2` if condition is true
// for (var i = 0; i < 10; i += 2) {
//     // `.push(i)` is done on myArray, hence adding items to end of array
//     myArray.push(i);
// }

// [1,3,5,7,9]
console.log(myArray);
