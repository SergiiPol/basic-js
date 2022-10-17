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
 function getCommonCharacterCount(s1, s2) {
  const newS1 = [...s1];
  const newS2 = [...s2];
 newS1.sort();
 newS2.sort();
  let i = newS1.length, j = newS2.length, three = [];
  while (i > 0 && j > 0) {
      i--;
      j--;
      if (newS1[i] > newS2[j]) j++;
      else if (newS1[i] < newS2[j]) i++;
      else three.push(newS1[i]);
  }
  return three.length;
};
getCommonCharacterCount('aabcc', 'adcaa');

module.exports = {
  getCommonCharacterCount
};
