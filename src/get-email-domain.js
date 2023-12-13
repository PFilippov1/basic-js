const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let dogIndex = email.lastIndexOf("@");
console.log(dogIndex)
  if (dogIndex !== -1) {
    let newDomain = email.slice(dogIndex + 1);
    console.log(newDomain);
    return newDomain
  } else {
    console.log("The '@' symbol  not found");
  }
}


getEmailDomain('prettyandsimple@example.com')


module.exports = {
  getEmailDomain
};
