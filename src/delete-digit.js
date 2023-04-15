const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {

  let arr = n.toString().split('');
  let i=0;

  while(i<arr.length && (arr[i]>=arr[i+1])) {i++};

  arr[i] = "A"

  return +arr.filter(x=>x!="A").join('')
    
}

module.exports = {
  deleteDigit
};
