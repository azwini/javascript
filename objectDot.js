// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-dot-notation

// Basic JavaScript: Accessing Object Properties with Dot Notation

/**
 * dot notation (.)
 * dot notation is used when the name of property is known
 */

// Create an Object named `testObj`
var testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};

// Accessing value of `hat` in `testObj` object
var hatValue = testObj.hat;

// Accessing value of `shirt` in `testObj` object
var shirtValue = testObj.shirt;

// Accessing value of `shoes` in `testObj` object
var shoesValue = testObj.shoes;

// Accessing value of `someValue` in `testObj` object
var someValue = testObj.someValue;

// This will print `ballcap`, `jersey`, `cleats`
console.log(hatValue, shirtValue, shoesValue);

// This will print `undefined`, since the key `someValue` does not exist.
console.log(someValue);
