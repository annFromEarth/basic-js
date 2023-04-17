const { NotImplementedError } = require('../extensions/index.js');

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
function repeater(str, options) {

  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || "+";
  options.addition = options.hasOwnProperty("addition") ? String(options.addition) : "";
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || "|";

  let result_arr = [];

  let addition_arr = [];

  for (let i=0; i<options.additionRepeatTimes; i++) {
    addition_arr.push(String(options.addition));
  }

  let single_addition = addition_arr.join(`${options.additionSeparator}`);

  for (let j=0; j<options.repeatTimes; j++) {
    result_arr.push(String(str)+single_addition);
  }

  let result_string = result_arr.join(`${options.separator}`);

  return result_string;
  
}

module.exports = {
  repeater
};


