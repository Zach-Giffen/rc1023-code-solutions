/* exported includes */
// create a function that takes two arguments, array and value
// create a loop with i
// check if the value of array[i] is equel to value

function includes(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true;
    }
  }
  return false;
}

// create a function that takes two arguments, array and value
// create a loop with i
// check if the value of array[i] is equel to value
// returns true if true
// returns false otherwise
