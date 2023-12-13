const {NotImplementedError} = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
    console.log(n.length)
    const notFitLetters = ['g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    const letter = notFitLetters.join('').toUpperCase().split('')
    let count
    console.log(notFitLetters.join('').toUpperCase().split(''))
    if (typeof n === 'string' && n.length === 17) {
        const address = n.split('-')
        console.log(address)
        const newaddress = address.join('').split('')
        console.log(newaddress)
        count = letter.reduce((acc, char) => {
            return acc + (newaddress.includes(char) ? 1 : 0);
        }, 0);
        console.log(count)


    }

    if (count === 0) {
        return true
    } else return false

}


isMAC48Address('Z1-1B-63-84-45-E6')
module.exports = {
    isMAC48Address
};
