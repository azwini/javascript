// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-vs.-local-scope-in-functions

// Basic JavaScript: Global vs. Local Scope in Functions

var outerWear = "T-Shirt"; // global variable

function myOutfit() {
    var outerWear = "sweater"; // local variable
    return outerWear;
}

console.log(myOutfit());
console.log(outerWear);
