const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
const getDNSStats = (ArrayOfDomains) => {
    let domainPartsSet = new Set();
    const arrayOfDomainArrays = [];
    const resultObject = {};

    for (const domain of ArrayOfDomains) {
        const reversePartsArray = domain.split('.').reverse();
        arrayOfDomainArrays.push(reversePartsArray);
        let constructDomain = [];

        for (let i = 0; i < reversePartsArray.length; i++) {
            constructDomain.push('.');
            constructDomain.push(reversePartsArray[i]);
            domainPartsSet.add(constructDomain.join(''));
        }
    }
    for (uniqueDomain of domainPartsSet) {
        let count = 0;
        for (const domainArray of arrayOfDomainArrays) {
            let domainStringConstruct = '';
            for (let i = 0; i < domainArray.length; i++) {
                domainStringConstruct += '.' + domainArray[i];
                if (domainStringConstruct === uniqueDomain) {
                    count++;
                }
            }
        }
        resultObject[uniqueDomain] = count;
    }
    return resultObject;
};

module.exports = {
  getDNSStats
};
