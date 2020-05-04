// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-division

// Basic JavaScript: Compound Assignment With Augmented Division


var a = 48; // initialize variable `a` with `48`
var b = 108; // initialize variable `b` with `108`
var c = 33; // initialize variable `c` with `33`

/**
 * `/=` performs divison operation and assignment in one step
 * for eg. a = a / 3; --> this can be represented as a /= 3;
 */
a /= 12; // divide `a` by `12` and assign back to `a`
b /= 4; // divide `b` by `4` and assign back to `b`
c /= 11; // divide `c` by `11` and assign back to `c`

console.log(a); // `4`
console.log(b); // `27`
console.log(c); // `3`
