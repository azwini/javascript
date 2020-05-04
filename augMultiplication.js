// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/compound-assignment-with-augmented-multiplication

// Basic JavaScript: Compound Assignment With Augmented Multiplication


var a = 5; // initialize variable `a` with `5`
var b = 12; // initialize variable `b` with `12`
var c = 4.6; // initialize variable `c` with `4.6`

/**
 * `*=` performs multiplication operation and assignment in one step
 * for eg. a = a * 3; --> this can be represented as a *= 3;
 */
a *= 5; // multiply `a` with `5` and assign back to `a`
b *= 3; // multiply `b` with `3` and assign back to `b`
c *= 10; // multiply `c` with `10` and assign back to `c`

console.log(a); // `25`
console.log(b); // `36`
console.log(c); // `46`
