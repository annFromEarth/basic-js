const { NotImplementedError } = require('../extensions/index.js');

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
function transform(arr) {
  if (!Array.isArray(arr)) {throw new Error("'arr' parameter must be an instance of the Array!")};
  
  let actions = ["--discard-next", "--discard-prev","--double-next","--double-prev"];

  let new_arr=arr.slice(0, arr.length);

  for(let i=0; i<new_arr.length; i++) {
    if (new_arr[i] === "--discard-next") {
      new_arr[i]="--exclude";
      if (new_arr[i+1]) {
        new_arr[i+1]="--exclude";
      }
    }

    if (new_arr[i] === "--discard-prev") {
      new_arr[i]="--exclude";
      if (new_arr[i-1]) {
        new_arr[i-1]="--exclude";
      }
    }

    if (new_arr[i] === "--double-next") {
      new_arr[i]="--exclude";
      if (new_arr[i+1]) {
        new_arr[i]=new_arr[i+1];
      }
    }

    if (new_arr[i] === "--double-prev") {
      new_arr[i]="--exclude";
      if (new_arr[i-1]) {
        new_arr[i]=new_arr[i-1];
      }
    }
  }

  return new_arr.filter(x=>x!="--exclude");

}

  // function discard_next(action_index, array) { 
  //   array[action_index]="--exclude";
  //   if (array[action_index+1]) {
  //     array[action_index+1]="--exclude";
  //     return array;
  //   }
  // }

  // function discard_prev(action_index, array) { 
  //   array[action_index]="--exclude";
  //   if (array[action_index-1]) {
  //     array[action_index-1]="--exclude";
  //     return array;
  //   }
  // }
  
  // function double_next(action_index, array) { 
  //   array[action_index]="--exclude";
  //   if (array[action_index+1]) {
  //     array[action_index]=array[action_index+1];
  //     return array;
  //   }
  // }

  // function double_prev(action_index, array) { 
  //   array[action_index]="--exclude";
  //   if (array[action_index-1]) {
  //     array[action_index]=array[action_index-1];
  //     return array;
  //   }
  // }



module.exports = {
  transform
};
