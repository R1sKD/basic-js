import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  console.log(arr);
   if (!Array.isArray(arr)) {
      throw new Error(`'arr' parameter must be an instance of the Array!`)
   };
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
         case '--discard-next':
            arr[i + 1] = undefined;
            i++;
            break;
         case '--discard-prev':
            if (res[res.length - 1] === arr[i - 1]) {
              res.pop();
            }
            break;
         case '--double-next':
            if (arr[i + 1] != undefined) {
              res.push(arr[i + 1]);
            }
            break;
         case '--double-prev':
            if (arr[i - 1] != undefined) {
              res.push(arr[i - 1]);
            }
            break;
         default:
            res.push(arr[i]);
      };
   };
   return res;
}
