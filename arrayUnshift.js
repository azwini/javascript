// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-shift

// Basic JavaScript: Manipulate Arrays With unshift()

/**
 * unshift --> acts like push but adds element to beginning of array.
 */

var myArray = [
    ["John", 23],
    ["dog", 3]
];
// myArray.shift();

// `.unshift` operation on myArray
myArray.unshift(["Paul", 35]);

// [["Paul", 35], ["John", 23], ["dog", 3]]
console.log(myArray);
