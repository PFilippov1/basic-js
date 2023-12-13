const {NotImplementedError} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false;
    }
    let first = []
    members.map((elem) => {
        if (typeof elem === 'string') {
            first.push(elem)
        }
    })
    const firstL = first.map(e => e.trim()[0])
    const sec = firstL.sort((a, b) => a.localeCompare(b)).join('').toUpperCase()
    console.log(sec)
    return sec

}

createDreamTeam([
    ['David Abram'],
    ['Robin Attfield'],
    'Thomas Berry',
    ['Paul R.Ehrlich'],
    'donna Haraway',
    ' BrIaN_gOodWiN  ',
    {
        0: 'Serenella Iovino'
    },
    'Erazim Kohak',
    '  val_plumwood',
])

module.exports = {
    createDreamTeam
};
