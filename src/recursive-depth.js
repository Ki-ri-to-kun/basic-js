const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
    calculateDepth(array, depth = 1, maxDepth = 1) {
        if (depth > maxDepth) {
            maxDepth = depth;
        }
        for (const item of array) {
            if (Array.isArray(item)) {
                maxDepth = this.calculateDepth(item, depth + 1, maxDepth);
            }
        }
        return maxDepth;
    }
}

module.exports = {
  DepthCalculator
};
