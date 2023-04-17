const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
const getSumOfDigits = n => {
    let digitsArray = n.toString().split('');
    let summa = digitsArray.reduce((accum, value) => accum + +value, 0);

    while (summa > 9) {
        digitsArray = summa.toString().split('');
        summa = digitsArray.reduce((accum, value) => accum + +value, 0);
    }
    return summa;
};

module.exports = {
  getSumOfDigits
};
