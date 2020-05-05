// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/concatenating-strings-with-the-plus-equals-operator

// Basic JavaScript: Concatenating Strings with the Plus Equals Operator

/**
 * `+=` operator concatenates a string to end of another existing string
 * it does not add spaces, must be given by user
 */

var myStr = "This is the first sentence. "; // initiates `myStr` with `This is the first sentence. `
myStr += "This is the second sentence."; // concatinates `myStr` with `This is the second sentence.`

console.log(myStr); // This is the first sentence. This is the second sentence.
