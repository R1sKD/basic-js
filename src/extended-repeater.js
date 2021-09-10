import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
   let addition = options.addition;
   let repeatTimes = options.repeatTimes;
   let addRepeatTimes = options.additionRepeatTimes;
   let separator = options.separator;
   let addSeparator = options.additionSeparator;
   if (addition === undefined) {
      addition = '';
   }
   if (repeatTimes === undefined) {
      repeatTimes = 1;
   }
   if (addRepeatTimes === undefined) {
      addRepeatTimes = 1;
   }
   if (separator === undefined) {
      separator = '+';
   }
   if (addSeparator === undefined) {
      addSeparator = '|';
   }
   let resStr = '';
   let addStr = '';
   for (let i = 0; i < addRepeatTimes; i++) {
      addStr += addition + addSeparator;
   }
   addStr = addStr.slice(0, addStr.length - addSeparator.length);
   resStr = (str + addStr + separator).repeat(repeatTimes);

   return resStr.slice(0, resStr.length - separator.length);
}
