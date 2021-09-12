import { NotImplementedError } from '../extensions/index.js';

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
export default function deleteDigit(n) {
  let numbers = [];
  let num = n.toString();
  for (let i = 0; i < num.length; i++) {
    if (i != 0) {
      numbers.push(num.slice(0, i) + num.slice(i + 1));
    } else {
      numbers.push(num.slice(1));
    }
  }
  numbers.map(n => +n);
  return Math.max(...numbers);
}
