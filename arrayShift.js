// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift

// Basic JavaScript: Manipulate Arrays With shift()

/**
 * shift --> removes first element
 */

var myArray = [
    ["John", 23],
    ["cat", 2]
];
// `.shift` operation is done on myArray and storing the remaining items in removedFromMyArray
var removedFromMyArray = myArray.shift();

console.log(myArray); // [["cat", 2]]
console.log(removedFromMyArray); // ["John", 23]
