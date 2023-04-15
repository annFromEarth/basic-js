const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {

  console.dir(str);

  let arr=[];

  let str_arr=str.split('');

  let counter=1;

  for(let i=1; i<str_arr.length; i++) {
    if (str_arr[i]===str_arr[i-1]) {
      counter++;
      if(i==str_arr.length-1) {arr.push(counter+str_arr[i-1]);}
    }else if(!(str_arr[i]===str_arr[i-1])) {
      arr.push(counter+str_arr[i-1]);
      counter=1;
      if(i==str_arr.length-1) {arr.push(counter+str_arr[i]);}
    }

  }

  return arr.join("").split("").filter(x=>x!=1).join("")
  
}

module.exports = {
  encodeLine
};
