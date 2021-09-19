import {
   NotImplementedError
} from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
   if (!date) {
      return 'Unable to determine the time of year!';
   }
   if (!(date instanceof Date) || Object.keys(date).length) {
      throw new Error("Invalid date!");
   }
   let winter = [11, 0, 1];
   let spring = [2, 3, 4];
   let summer = [5, 6, 7];
   let autumn = [8, 9, 10];
   let month = date.getMonth();
   let season = winter.includes(month) ? 'winter' :
      spring.includes(month) ? 'spring' :
      summer.includes(month) ? 'summer' :
      autumn.includes(month) ? 'autumn' :
      'Invalid date!';
   return season;
}