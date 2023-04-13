const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

const getCommonCharacterCount = (str1, str2) => {
	const arrayFromStr1 = str1.split('');
	const arrayFromStr2 = str2.split('');
	
	let longestArray = [];
	let shortestArray = [];
	
	let count = 0;
	
	if(arrayFromStr1.length > arrayFromStr2.length){
		longestArray = [...arrayFromStr1];
		shortestArray = [...arrayFromStr2];
	} else {
		longestArray = [...arrayFromStr2];
		shortestArray = [...arrayFromStr1];
	}
	
	for(const letter of longestArray){
		const index = shortestArray.findIndex(let => letter === let);
		if(index !== -1){
			count++;
			shortestArray.splice(index, 1);
		}
	}
	return count;
};

module.exports = {
  getCommonCharacterCount
};
