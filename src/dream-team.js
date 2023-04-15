const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = members => {
    let resultArray = [];
    if (!Array.isArray(members)) {
        return false;
    }

    for (const name of members) {
        if (typeof name !== 'string') {
            continue;
        }
        noStringsInArray = false;
        const firstLetter = name.trim()[0].toUpperCase();
        resultArray.push(firstLetter);
    }

    return resultArray.sort().join('');
};

module.exports = {
  createDreamTeam
};
