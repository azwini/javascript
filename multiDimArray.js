// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/access-multi-dimensional-arrays-with-indexes

// Basic JavaScript: Access Multi-Dimensional Arrays With Indexes

// multiple arrays are passed within an array to form multi dimensional array
var myArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [
        [10, 11, 12], 13, 14
    ]
]
// in multi dimensional array, access of data starts with first entry level and follows the subsequent levels
var myData = myArray[3];
var myData1 = myArray[3][0];
var myData2 = myArray[3][0][1];

console.log(myData); // `[[ 10, 11, 12 ], 13, 14]`
console.log(myData1); // `[10, 11, 12]`
console.log(myData2); // `11`
