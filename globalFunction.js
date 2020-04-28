// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/global-scope-and-functions

// Basic JavaScript: Global Scope and Functions


var myGlobal = 10; // Declare global (myGlobal) variable

function fun1() {
    oopsGlobal = 5; // Assign 5 to oopsGlobal
}

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}
fun1();
fun2();
