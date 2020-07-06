// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters

// ES6: Use Destructuring Assignment to Pass an Object as a Function's Parameters

// passing parameters to `stats`
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};

// const half = (stats) => (stats.max + stats.min) / 2.0;
const half = ({
    max,
    min
}) => (max + min) / 2.0;
console.log(half(stats)); // prints `28.015`
