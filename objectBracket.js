// https:https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-object-properties-with-bracket-notation

// Basic JavaScript: Accessing Object Properties with Bracket Notation

/* bracket notation ([])
bracket notation is used when the object has space in its name (can be used even when no space)
*/

var testObj = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};

var entreeValue = testObj["an entree"]; // bracket notation []
var sideValue = testObj["my side"];
var drinkValue = testObj["the drink"];

console.log(entreeValue);
