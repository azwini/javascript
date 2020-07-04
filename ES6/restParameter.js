// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/es6/use-the-rest-parameter-with-function-parameters

// ES6: Use the Rest Parameter with Function Parameters


/**
 * When `...` is at the end of function parameter, it is the rest parameter.
 * It stores n number of parameters as an array.
 * With the help of a rest parameter a function can be called with any number of arguments, no matter how it was defined.
 */
const sum = (...args) => {
  /**
   * The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
   * The reducer function takes four arguments:
   --> Accumulator(acc)
   --> Current Value(cur)
   --> Current Index(idx)
   --> Source Array(src)
   * reducer function's returned value is assigned to the accumulator, whose value is remembered across each iteration throughout the array, and ultimately becomes the final, single resulting value.
   */
  return args.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // returns `6`
console.log(sum(1, 2, 3, 4)); // returns `10`
console.log(sum(5)); // returns `5`
console.log(sum()); // returns `0`
