const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = (number) => {
    const stringFromNumber = number.toString();
    const numbersAfterDeletingDigit = [];

    for (let index = 0; index < stringFromNumber.length; index++) {
        const numberAfterDeletingDigit = stringFromNumber.slice(0, index) + stringFromNumber.slice(index + 1);
        numbersAfterDeletingDigit.push(+numberAfterDeletingDigit);
    }

    return Math.max.apply(null, numbersAfterDeletingDigit);
};

module.exports = {
  deleteDigit
};
