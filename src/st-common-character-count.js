import {
  NotImplementedError
} from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let shortStr = s1.length > s2.length ? s2.split('') : s1.split('');
  let longStr = shortStr === s2 ? s1.split('') : s2.split('');
  for (let i = 0; i < shortStr.length; i++) {
    if (longStr.includes(shortStr[i])) {
      res++;
      let index = longStr.indexOf(shortStr[i]);
      longStr.splice(index, 1);
    }
  }
  return res;
}