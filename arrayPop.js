// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop

// Basic JavaScript: Manipulate Arrays With pop()

/**
 * pop --> removes last element
 */

// defining variable myArray
var myArray = [
    // Add items to array
    "xyz",
    "abc",
    "123"
];

// pop operation on myArray.
// hence variable myArray after pop operation will have a value of ['xyz', 'abc']
// myArray.pop();

// xyz, abc, 123
// myArray.push("123")

// removedFromMyArray will display the removed item from myArray
var removedFromMyArray = myArray.pop();

console.log(removedFromMyArray); // `123`

// xyz, abc
// console.log(myArray);
