// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-extract-values-from-objects

// ES6: Use Destructuring Assignment to Extract Values from Objects


// Destructuring assignment is special syntax introduced in ES6, for neatly assigning values taken directly from an object.

// passing array parameters to variable `HIGH_TEMPERATURES`
const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
};

/**
 *
 const today = HIGH_TEMPERATURES.today;
 const tomorrow = HIGH_TEMPERATURES.tomorrow;

 * Here, the `today` & `tomorrow` variables will be created & assigned the values of their respective values from the `HIGH_TEMPERATURES` object.
 */

const {
    today,
    tomorrow
} = HIGH_TEMPERATURES;

console.log(HIGH_TEMPERATURES); // prints `{yesterday: 75, today: 77, tomorrow: 80}`
