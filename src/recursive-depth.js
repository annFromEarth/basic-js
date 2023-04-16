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

  constructor() {
  }

  calculateDepth(arr) {

    // console.dir(arr)

    let counter = 1;

    for(let subarray of arr) {

      let local_depth=1;

      if (Array.isArray(subarray)) {
        local_depth = local_depth + this.calculateDepth(subarray);
      }

      if (local_depth > counter) {
        counter = local_depth;
      }

    }

    return counter;

  }
}

module.exports = {
  DepthCalculator
};
