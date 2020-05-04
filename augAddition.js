// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-addition

// Basic JavaScript: Compound Assignment With Augmented Addition


var a = 3; // initialize variable `a` with `3`
var b = 17; // initialize variable `b` with `17`
var c = 12; // initialize variable `c` with `12`

/**
 * everything to right of `=` is operated first
 * `+=` performs addition operation and assignment in one step
 * for eg. a = a + 3; --> this can be represented as a += 3;
 */
a += 12; // increment `a` with `12` and assign back to `a`
b += 9; // increment `b` with `9` and assign back to `b`
c += 7; // increment `c` with `7` and assign back to `c`

console.log(a); // `15`
console.log(b); // `26`
console.log(c); // `19`
