// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-or-equal-to-operator

// Basic JavaScript: Comparison with the Greater Than Or Equal To Operator

// greater than or equal to operator >=
// >= operator will convert data types while comparing

function testGreaterOrEqual(val) {
    if (val >= 20) { // If the number to the left is greater than or equal to the number to the right it returns true. Otherwise, it returns false.
        return "20 or Over";
    }

    if (val >=10) {
        return "10 or Over";
    }

    return "Less than 10";
}

console.log(testGreaterOrEqual(10));
