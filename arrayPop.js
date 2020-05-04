// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/manipulate-arrays-with-pop

// Basic JavaScript: Manipulate Arrays With pop()

/**
 * pop --> removes last element.
 * myArray should only contain[["John", 23]].
 * You should use pop() on myArray.
 */

// defining variable myArray
var myArray = [
    // Add items to array
    "xyz",
    "abc",
    "123"
];

// xyz, abc
myArray.pop();

// xyz, abc, 123
myArray.push("123")

var removedFromMyArray = myArray.pop();

// 123
console.log(removedFromMyArray);

// xyz, abc
console.log(myArray);
