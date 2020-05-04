// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements

// Basic JavaScript: Adding a Default Option in Switch Statements

/* 'default' statement should be the last case
it is like last 'else' statement in if/else chain
*/

/**
 * function to return value based on starting character of input
 */
function switchOfStuff(val) {
    // Initialise variable
    var answer = "";

    // Switch statement
    switch (val) {
        case "a":
            // When `val` is `a`
            answer = "apple";
            break;
        case "b":
            // When `val` is `b`
            answer = "bird";
            break;
        case "c":
            // When `val` is `c`
            answer = "cat";
            break;
        default:
            // When `val` doesn't match any of the above statements
            answer = "stuff";
            break;
    }
    // return updated answer
    return answer;
}

// This should return `cat`
console.log(switchOfStuff("c"));

// This should return `???`
console.log(switchOfStuff("z"));
