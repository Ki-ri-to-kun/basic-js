const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
const getSeason = date => {
    if (date === undefined) {
        return 'Unable to determine the time of year!';
    }
    if (!(date instanceof Date) || Object.getOwnPropertyNames(date).length !== 0) {
        throw new Error('Invalid date!');
    }

    let season = 'winter';
    if (date.getMonth() > 1 && date.getMonth() < 5) {
        season = 'spring';
    } else if (date.getMonth() > 4 && date.getMonth() < 8) {
        season = 'summer';
    } else if (date.getMonth() > 7 && date.getMonth() < 11) {
        season = 'autumn';
    }
    return season;
};

module.exports = {
  getSeason
};
