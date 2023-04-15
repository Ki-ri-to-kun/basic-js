const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
const encodeLine = str => {
    let resultString = '';
    let i2 = 0;

    for (let i = 0; i < str.length; i++) {
        if (i < i2) {
            continue;
        }

        let countLetters = 0;
        while (str[i] === str[i2]) {
            countLetters++;
            i2++;
        }

        countLetters = countLetters === 1 ? '' : countLetters;
        resultString += countLetters + str[i];
    }

    return resultString;
};

module.exports = {
  encodeLine
};
