// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-extract-values-from-objects

// ES6: Use Destructuring Assignment to Extract Values from Objects


// Destructuring allows you to assign a new variable name when extracting values. You can do this by putting the new name after a colon when assigning the value.

// passing array parameters to variable `HIGH_TEMPERATURES`
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

/**
 *
 const highToday = HIGH_TEMPERATURES.today;
 const highTomorrow = HIGH_TEMPERATURES.tomorrow;
 * Replace the two assignments with an equivalent destructuring assignment.
 * It should still assign the variables `highToday` & `highTomorrow` the values of `today` & `tomorrow` from the `HIGH_TEMPERATURES` object.
 */
const {
    today: highToday, tomorrow: highTomorrow
} = HIGH_TEMPERATURES;

console.log(HIGH_TEMPERATURES); // prints `{yesterday: 75, today: 77, tomorrow: 80}`
console.log(highToday); // prints `77`
console.log(highTomorrow); // prints `80`
