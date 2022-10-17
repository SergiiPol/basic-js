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
  let result = [].concat(...matrix);
  let counter = 0;
 for (let elem of result) {
   if (elem == '^^') {
     counter++;
   };
  };
  return counter;
};
countCats([[0, 1, '^^'],[0, '^^', 2],['^^', 1, 2]]);
module.exports = {
  countCats
};
