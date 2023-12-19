const {NotImplementedError} = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
    throw new NotImplementedError('Not implemented');
    try {
        if (!(typeof date === 'object' &&
            (date instanceof Date))) {
            throw new Error('Invalid date!');
        }

        const month = date.getMonth();

        if (month >= 0 && month <= 2){
            return 'winter';
        } else if (month >= 3 && month <= 5) {
            return 'spring';
        } else if (month >= 6 && month <= 8) {
            return 'summer';
        } else if (month >= 9 && month <= 11) {
            return 'autumn';
        }

    } catch (error) {
        console.error('Invalid date!', error.message);
        return null;
    }
}
// getSeason(new Date(2019, 11, 22, 23, 45, 11, 500))

module.exports = {
    getSeason
};
