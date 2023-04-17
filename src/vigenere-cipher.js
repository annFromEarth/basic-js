const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {

  constructor (straight = true) {
    this.reveresed = !straight;
  }

  encrypt(message, key) {

    if (!message || !key) throw new Error(`Incorrect arguments!`);

    console.dir(key)

    const ALPHABET_LENGTH = 26;
    const CHAR_CODE_A = 65;
    const CHAR_CODE_Z = 90;

    function unicodize(word) {    //transform english aplphabet symbols into their unicode numbers, if not english letter - leave unchanged

      let word_letters_arr = [];
      word_letters_arr = word.toUpperCase().split("");

      for (let i=0;  i< word_letters_arr.length; i++) {
         if (word_letters_arr[i].charCodeAt(0) >= CHAR_CODE_A && word_letters_arr[i].charCodeAt(0) <= CHAR_CODE_Z) {
          word_letters_arr[i] = word_letters_arr[i].charCodeAt(0);
         }
        }
        return word_letters_arr;
      }

    let message_UpperCase_Arr = unicodize(message);   //transform message to unicode
    let key_UpperCase_Arr = unicodize(key);  //transform key to unicode

    let key_Array=[];

    function makeKeyArray(key_UpperCase_Arr) { //function to make an array of repeated keyword(key Charcode numbers) in the length of the message
      
      let counter=0;

      for (let i=0; i< message_UpperCase_Arr.length; i++) {

        if (typeof message_UpperCase_Arr[i] === "number") {
          if(counter===key_UpperCase_Arr.length) {
            counter=0;
          }
          key_Array.push(key_UpperCase_Arr[counter])
          counter++;

         } else {
          key_Array.push(message_UpperCase_Arr[i])
         }

      }
      return key_Array;
    }

    makeKeyArray(key_UpperCase_Arr); //actually make the array of repeated keywords

    console.dir(key_Array)

    let displacement;
    let answer = [];

    for (let j=0; j<message_UpperCase_Arr.length; j++){    // encrypt phrase according to vigenere method

      if (typeof message_UpperCase_Arr[j] !== "number") {
        answer.push(message_UpperCase_Arr[j]);
      
      } else {
        displacement = key_Array[j]-CHAR_CODE_A;
        let displacement_corrected=message_UpperCase_Arr[j]+displacement;
        if ((message_UpperCase_Arr[j]+displacement)>CHAR_CODE_Z) {
          displacement_corrected=displacement_corrected-ALPHABET_LENGTH;
        }

        answer.push(String.fromCharCode(displacement_corrected))    
      }
    } 

    if (this.reversed) {
      return answer.reverse().join("");
    } else {
      return answer.join("")
    }
   
  }


  decrypt(message, key) {

    if (!message || !key) throw new Error(`Incorrect arguments!`);

    console.dir(key)

    const ALPHABET_LENGTH = 26;
    const CHAR_CODE_A = 65;
    const CHAR_CODE_Z = 90;

    function unicodize(word) {    //transform english aplphabet symbols into their unicode numbers, if not english letter - leave unchanged

      let word_letters_arr = [];
      word_letters_arr = word.toUpperCase().split("");

      for (let i=0;  i< word_letters_arr.length; i++) {
         if (word_letters_arr[i].charCodeAt(0) >= CHAR_CODE_A && word_letters_arr[i].charCodeAt(0) <= CHAR_CODE_Z) {
          word_letters_arr[i] = word_letters_arr[i].charCodeAt(0);
         }
        }

        return word_letters_arr;
      }

    let encrypted_message_UpperCase_Arr = unicodize(message);   //transform message to unicode
    let key_UpperCase_Arr = unicodize(key);  //transform key to unicode
    

    let key_Array=[];

    console.dir(encrypted_message_UpperCase_Arr)

    function makeKeyArray(key_UpperCase_Arr) { //function to make an array of repeated keyword(key Charcode numbers) in the length of the message
      
      let counter=0;

      for (let i=0; i< encrypted_message_UpperCase_Arr.length; i++) {

        if (typeof encrypted_message_UpperCase_Arr[i] === "number") {
          
          if(counter===key_UpperCase_Arr.length) {
            counter=0;
          }
  
          key_Array.push(key_UpperCase_Arr[counter])
          counter++;

         } else {
          key_Array.push(encrypted_message_UpperCase_Arr[i])
         }

      }

      return key_Array;
    }

    makeKeyArray(key_UpperCase_Arr); //actually make the array of repeated keywords

    console.dir(key_Array)

    let displacement;
    let answer = [];

    for (let j=0; j<encrypted_message_UpperCase_Arr.length; j++){    // encrypt phrase according to vigenere method

      if (typeof encrypted_message_UpperCase_Arr[j] !== "number") {
        answer.push(encrypted_message_UpperCase_Arr[j]);
      
      } else {
        displacement = key_Array[j]-CHAR_CODE_A;
        let displacement_corrected=encrypted_message_UpperCase_Arr[j]-displacement;
        if ((encrypted_message_UpperCase_Arr[j]-displacement)<CHAR_CODE_A) {
          displacement_corrected=displacement_corrected+ALPHABET_LENGTH;
        }

        answer.push(String.fromCharCode(displacement_corrected))    
        
      }
    } 
    
    if (this.reversed) {
      return answer.reverse().join("");
    } else {
      return answer.join("")
    }

    
  }
}

module.exports = {
  VigenereCipheringMachine
};
