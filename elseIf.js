// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/introducing-else-if-statements

// Basic JavaScript: Introducing Else If Statements

/* When mutiple conditions 'else if' is used
*/

function testElseIf(val) {
    if (val > 10) {
        return "Greater than 10";
    }

    else if (val < 5) {
        return "Smaller than 5";
    }

    else {
        return "Between 5 and 10";
    }
}

console.log(testElseIf(4));
