// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/word-blanks

// Basic JavaScript: Word Blanks

/* wordBlanks should be a string.
You should not change the values assigned to myNoun, myVerb, myAdjective or myAdverb.
You should not directly use the values "dog", "ran", "big", or "quickly" to create wordBlanks.
wordBlanks should contain all of the words assigned to the variables myNoun, myVerb, myAdjective and myAdverb separated by non-word characters (and any additional words in your madlib).
*/

var myNoun = "dog";
var myAdjective = "big";
var myVerb = "ran";
var myAdverb = "quickly";

var wordBlanks = "the " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + ".";

console.log(wordBlanks);
