// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/adding-a-default-option-in-switch-statements

// Basic JavaScript: Adding a Default Option in Switch Statements

/* 'default' statement should be the last case
it is like last 'else' statement in if/else chain
*/

function switchOfStuff(val) {
    var answer = "";
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    return answer;
}

console.log(switchOfStuff("c"));
