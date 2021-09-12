import {
  NotImplementedError
} from '../extensions/index.js';

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
export default function isMAC48Address(n) {
  let numFormat16 = ['A', 'B', 'C', 'D', 'E', 'F', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let str = n.split('-');
  if (str.length != 6) return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i].length != 2) return false;
  }
  console.log(str);
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split('');
    for (let j = 0; j < str[i].length; j++) {
      console.log(str[i][j]);
      if (!numFormat16.includes(str[i][j])) {
        return false;
      }
    }
  }
  return true;
}