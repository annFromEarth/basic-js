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

    console.dir(arr)

    let counter=0;
    function countLevels(x){
      
      if(!Array.isArray(x)) {
        return counter;
      } else {
        counter++;
        for (let i=0;i<x.length; i++){
        countLevels(x[i])
      }
    }

    }

    countLevels(arr);
    return counter;


    // const getArrayDepth = value => Array.isArray(value) ?
    // 1 + Math.max(0, ...value.map(getArrayDepth)) :
    // 0;

  }
}

module.exports = {
  DepthCalculator
};
