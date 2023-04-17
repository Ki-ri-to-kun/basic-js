const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
const transform = arr => {
    let newArray = [];
    if (Array.isArray(arr)) {
        newArray = arr.slice();
    } else {
        throw new Error("'arr' parameter must be an instance of the Array!");
    }

    newArray.forEach((item, index) => {
        if (item === '--discard-next') {
            if (index + 1 in newArray) {
                newArray.splice(index + 1, 1, undefined);
            }
            newArray.splice(index, 1, undefined);
        }
        if (item === '--discard-prev') {
            if (index - 1 in newArray) {
                newArray.splice(index - 1, 1, undefined);
            }
            newArray.splice(index, 1, undefined);
        }
        if (item === '--double-next') {
            if (index + 1 in newArray) {
                newArray.splice(index + 1, 0, newArray[index + 1]);
            }
            newArray.splice(index, 1, undefined);
        }
        if (item === '--double-prev') {
            if (index - 1 in newArray) {
                newArray.splice(index - 1, 0, newArray[index - 1]);
                newArray.splice(index + 1, 1, undefined);
            } else {
                newArray.splice(index, 1, undefined);
            }
        }
    });

    return newArray.filter(item => item !== undefined);
};

module.exports = {
  transform
};
