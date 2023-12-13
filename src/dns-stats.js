const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
// const allDomains =domains.join('.');

  const dnsCounts = {};

  for (const domain of domains) {
    const parts = domain.split('.').reverse();
    console.log(parts)
    let dns = '';

    for (const part of parts) {
      dns += `.${part}`;
      console.log(dns)
      if (!dnsCounts[dns]) {
        dnsCounts[dns] = 1;
      } else {
        dnsCounts[dns]++;
      }
    }
  }
  console.log(dnsCounts)
  return dnsCounts;


}

getDNSStats(['onliner.by', 'info.onliner.by'])


module.exports = {
  getDNSStats
};
