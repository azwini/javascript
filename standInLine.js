// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/stand-in-line

// Basic JavaScript: Stand in Line

function nextInLine(arr, item) { // function nextInLine takes an array (arr) and a number (item) as arguments
    arr.push(item); // adding number to end of the array
    return arr.shift(); // remove first element of the array, removes [1]
}

var testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr)); // prints [1,2,3,4,5]
console.log(nextInLine(testArr, 6)); // adds [6]
console.log("After: " + JSON.stringify(testArr)); // prints [2,3,4,5,6]
