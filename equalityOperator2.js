// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-strict-inequality-operator

// Basic JavaScript: Comparison with the Strict Inequality Operator

/* inequality operator is !==
*/

function testStrictNotEqual(val) {
    if (val !== 17) { //
        return "Not Equal";
    }
    return "Equal";
}

console.log(testStrictNotEqual(10));
