const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleString){
	if(typeof sampleString !== 'string'){
		return false;
	}
	const sampleDataNumber = +sampleString;
	if(isNaN(sampleDataNumber)){
		return false;
	} 
	if (sampleDataNumber <= 0 || sampleDataNumber >= 15){
		return false;
	}
	
	return Math.ceil((5730 * Math.log(15/sampleDataNumber)) / Math.log(2));
}

module.exports = {
  dateSample
};
