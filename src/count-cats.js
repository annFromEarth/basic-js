const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cat_counter = [];

  // console.dir(matrix);

  if (!Array.isArray(matrix)) {
    return cat_counter.length;
  }

  for (let i=0; i<= matrix.length; i++) {

    if (Array.isArray(matrix[i])) {
          
    for (let j=0; j<=matrix[i].length; j++) {

      if (matrix[i][j] === '^^') {cat_counter.push("cat!");};
      }
    }}

  return  cat_counter.length;
}

module.exports = {
  countCats
};

// $ npx mocha test/count-cats.test

