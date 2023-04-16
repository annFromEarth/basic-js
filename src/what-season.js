const { NotImplementedError } = require('../extensions/index.js');

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
function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!'
  if (typeof date !== 'object' || Object.getOwnPropertyNames(date).length !== 0) throw new Error('Invalid date!')

  // if (!date) {return 'Unable to determine the time of year!'};
  // if (typeof date !== 'object') {throw new Error("Invalid date!")};
  // if (date.hasOwnProperty('toString')) {throw new Error("Invalid date!")}
  
  let spring = [2,3,4];
  let summer = [5,6,7];
  let autumn = [8,9,10];
  let winter = [11,0,1];

  if (spring.includes(date.getMonth())) {return "spring"}; 
  if (summer.includes(date.getMonth())) {return "summer"}; 
  if (autumn.includes(date.getMonth())) {return "autumn"}; 
  if (winter.includes(date.getMonth())) {return "winter"}; 

}

module.exports = {
  getSeason
};


// Попробуй через try catch проверять так date.toLocaleString(), и если в catch придет ошибка, то соответственно, прокинуть её (if (e) throw new Error("Invalid date!");)
