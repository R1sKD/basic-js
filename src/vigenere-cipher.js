import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {
  constructor (mod = true) {
    this.mod = mod;
  }
  encrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    string = string.toUpperCase();
    key = key.toUpperCase();

    let kf = Math.ceil(string.length / key.length);
    key = key.repeat(kf);

    let codeA = "A".charCodeAt(0);
    let abcCount = 26;

    let result = [];

    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ' || string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90) {
        result.push(string[i]);
      } else {
        let letterIdx = string.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(j) - codeA;
        j++;

        result.push(
          String.fromCharCode(codeA + (letterIdx + shift) % abcCount)
        );
      }
    }

    return this.mod === false ? result.reverse().join('') : result.join('');
  }
  decrypt(string, key) {
    if (string === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }

    string = string.toUpperCase();
    key = key.toUpperCase();
    
    //string = this.encrypted === string ? string : string.split('').reverse().join('') === string ? string.split('').reverse().join('') : string;

    let kf = Math.ceil(string.length / key.length);
    key = key.repeat(kf);

    let codeA = "A".charCodeAt(0);
    let abcCount = 26;

    let result = [];

    let j = 0;
    for (let i = 0; i < string.length; i++) {
      if (string[i] === ' ' || string[i].charCodeAt(0) < 65 || string[i].charCodeAt(0) > 90) {
        result.push(string[i]);
      } else {
        let letterIdx = string.charCodeAt(i) - codeA;
        let shift = key.charCodeAt(j) - codeA;
        j++;

        result.push(
          String.fromCharCode(codeA + (letterIdx - shift + abcCount) % abcCount)
        );
      }
    }

    return this.mod === false ? result.reverse().join('') : result.join('');
  }
}
