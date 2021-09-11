import {
   NotImplementedError
} from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
   link: [],
   getLength() {
      return this.link.length;
   },
   addLink(value) {
      if (value === undefined) {
         value = '';
      }
      this.link.push(`( ${value} )`);
      return this;
   },
   removeLink(position) {
      if (position < 0 || position > this.link.length || typeof position != 'number') {
         throw new Error('You can\'t remove incorrect link!');
      };
      this.link.splice(--position, 1);
      return this;
   },
   reverseChain() {
      this.link.reverse();
      return this;
   },
   finishChain() {
      let res = this.link.join('~~');
      return res;
   }
};