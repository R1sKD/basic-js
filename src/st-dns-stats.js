import { NotImplementedError } from '../extensions/index.js';

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
export default function getDNSStats(domains) {
  let res = {};
  for (let i = 0; i < domains.length; i++) {
    domains[i] = domains[i].split('.').reverse();
    console.log(domains[i]);
    if (domains[i].length === 1) {
      res['.' + domains[i].slice(0, 1)] = 0;
    } else if (domains[i].length === 2) {
      res['.' + domains[i].slice(0, 1)] = 0;
      res['.' + domains[i].slice(0, 1) + '.' + domains[i].slice(1, 2)] = 0;
    } else {
      res['.' + domains[i].slice(0, 1)] = 0;
      res['.' + domains[i].slice(0, 1) + '.' + domains[i].slice(1, 2)] = 0;
      res['.' + domains[i].slice(0, 1) + '.' + domains[i].slice(1, 2) + '.' + domains[i].slice(2)] = 0;
    }
  }
  for (let domain in res) {
    for (let i = 0; i < domains.length; i++) {
      if (domains[i].join('.').includes(domain.slice(1))) {
        res[domain] += 1;
      }
    }
  }
  return res;
}
