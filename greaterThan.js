// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/comparison-with-the-greater-than-operator

// Basic JavaScript: Comparison with the Greater Than Operator


function testGreaterThan(val) {
    if (val > 100) { // greater than operator > --> compares values of two numbers
        return "Over 100";
    }

    if (val > 10) {
        return "Over 10";
    }

    return "10 or Under";
}

console.log(testGreaterThan(10));
