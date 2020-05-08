// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/count-backwards-with-a-for-loop

// Basic JavaScript: Count Backwards With a For Loop


// passing an empty array to variable `myArray`
var myArray = [];
// to get numbers backwards
// looping with `for` by initializing variable `i` with value `9`, giving condition (i>0) and decrement `i` by `2` if condition is true
for (var i = 9; i > 0; i -= 2) {
    // `.push(i)` is done on myArray, hence adding items to end of array
    myArray.push(i);
}

// [9,7,5,3,1]
console.log(myArray);
