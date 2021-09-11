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
   if (!Array.isArray(arr)) {
      throw new Error(`'arr' parameter must be an instance of the Array! if the arr is not an Array`)
   };
   let res = [];
   for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
         case '--discard-next':
            if (typeof arr[i + 1] === 'number') {
               i++;
            };
            break;
         case '--discard-prev':
            if (typeof arr[i - 1] === 'number' && arr[i - 2] === '--double-next') {
               res.pop();
               res.pop();
            } else if (typeof arr[i - 1] === 'number' && typeof arr[i - 2] != 'string') {
               res.pop();
            };
            break;
         case '--double-next':
            if (typeof arr[i + 1] === 'number') {
               res.push(arr[i + 1]);
               res.push(arr[i + 1]);
               i++;
            };
            break;
         case '--double-prev':
            if (typeof arr[i - 1] === 'number') {
               res.push(arr[i - 1]);
               res.push(arr[i - 1]);
            };
            break;
         default:
            res.push(arr[i]);
      };
   };
   return res;
}
