// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/selecting-from-many-options-with-switch-statements

// Basic JavaScript: Selecting from Many Options with Switch Statements

/* 'switch' statement is used when many options are available
'switch' statements are executed from the first matched 'case' value until a 'break' is encountered
*/

function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    return answer;
}

console.log(caseInSwitch(2));
