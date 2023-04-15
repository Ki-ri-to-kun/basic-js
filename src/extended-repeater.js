const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
const repeater = (str, options) => {
    if (typeof str !== 'string' && str !== null) {
        str = str.valueOf();
    }
	
    if ( options.addition && typeof options.addition !== 'string') {
        options.addition = options.addition.valueOf();
    }
	 if (options.addition === null) {
        options.addition = 'null';
    }
    if (!options.separator) {
        options.separator = '+';
    }
    if (options.addition && !options.additionSeparator) {
        options.additionSeparator = '|';
    }
    if (!options.repeatTimes) {
        options.repeatTimes = 1;
    }
    if (!options.additionRepeatTimes) {
        options.additionRepeatTimes = 1;
    }

    const repeatStrings = [];
    let repeatAdditionStrings = [];

    for (let i = 0; i < options.repeatTimes; i++) {
        for (let i2 = 0; i2 < options.additionRepeatTimes; i2++) {
            repeatAdditionStrings.push(options.addition);
        }
        const stringAdditionWithSeparator = repeatAdditionStrings.join(options.additionSeparator);
		repeatAdditionStrings = [];
        repeatStrings.push(str + stringAdditionWithSeparator);
    }
    const stringWithSeparator = repeatStrings.join(options.separator);

    return stringWithSeparator;
};

module.exports = {
  repeater
};
