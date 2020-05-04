// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-subtraction

// Basic JavaScript: Compound Assignment With Augmented Subtraction


var a = 11; // initialize variable `a` with `11`
var b = 9; // initialize variable `b` with `9`
var c = 3; // initialize variable `c` with `3`

/**
 * `-=` performs subtraction operation and assignment in one step
 * for eg. a = a - 3; --> this can be represented as a -= 3;
 */
a -= 6; // decrement `a` by `6` and assign back to `a`
b -= 15; // decrement `b` by `15` and assign back to `b`
c -= 1; // decrement `c` by `1` and assign back to `c`

console.log(a); // `5`
console.log(b); // `-6`
console.log(c); // `2`
