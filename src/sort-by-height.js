const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let indices = [];
  let element = -1;
  let idx = arr.indexOf(element);
  while (idx != -1) {
    indices.push(idx);
    idx = arr.indexOf(element, idx + 1);
  }

  let arr1 = arr.filter(x=> x!=-1).sort((a,b)=>a-b);

  for (let i=0; i<indices.length; i++){
    arr1.splice(indices[i], 0, -1)
  }

  return arr1;

}

module.exports = {
  sortByHeight
};
