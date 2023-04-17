const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const sortByHeight = arr => {
    const withoutMinusOnes = arr.filter(number => {
        return number !== -1;
    });
    const minusArray = [];
    arr.filter((number, index) => {
        if (number === -1) {
            minusArray[index] = -1;
        }
    });
    const sortedArray = withoutMinusOnes.sort((a, b) => {
        return a - b;
    });
    minusArray.forEach((minus, index) => {
        sortedArray.splice(index, 0, minus);
    });
    return sortedArray;
};

module.exports = {
  sortByHeight
};
