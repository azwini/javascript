// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/delete-properties-from-a-javascript-object

// Basic JavaScript: Delete Properties from a JavaScript Object

var myDog = {
    "name": " Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"],
    "bark": "woof"
};

delete myDog.tails; // deleting property
console.log(myDog);
