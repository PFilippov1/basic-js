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
  const numString = n.toString();
  let maxNumber = -99999999;

  for (let i = 0; i < numString.length; i++) {
    const newNumber = parseInt(numString.slice(0, i) + numString.slice(i + 1));
    if (newNumber > maxNumber) {
      console.log(newNumber)
      console.log(maxNumber)
      maxNumber = newNumber;
      console.log(maxNumber)
    }
  }
console.log(maxNumber + '  ' + 'max')
  return maxNumber;
}
deleteDigit(21234)


module.exports = {
  deleteDigit
};
