// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-assign-variables-from-nested-objects

// ES6: Use Destructuring Assignment to Assign Variables from Nested Objects


// passing nested array parameters to variable `LOCAL_FORECAST`
const LOCAL_FORECAST = {
    yesterday: {
        low: 61,
        high: 75
    },
    today: {
        low: 64,
        high: 77
    },
    tomorrow: {
        low: 68,
        high: 80
    }
};

/**
 *
 const lowToday = LOCAL_FORECAST.today.low;
 const highToday = LOCAL_FORECAST.today.high;
 */
const {
    today: {
        low: lowToday,
        high: highToday
    }
} = LOCAL_FORECAST;

console.log(lowToday); // prints `64`
console.log(highToday); // prints `77`
