// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-equality-operator

// Basic JavaScript: Comparison with the Equality Operator

/* equality operator is ==
*/

function testEqual(val) {
    if (val == 12) { // equality operator compares two values and returns true if value is equal or false if not equal
        return "Equal";
    }
    return "Not Equal";
}

console.log(testEqual(10));
