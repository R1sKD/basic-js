import {
  NotImplementedError
} from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let res = '';
  for (let i = 0; i < str.length; i++) {
    let n = 1;
    while (str[i] === str[i+1]) {
      n++;
      i++;
    }
    res += n + str[i];
    n = 1;
  }
  return res.split('').filter(s => s != 1).join('');
}