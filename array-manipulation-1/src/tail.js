/* exported tail */
// split the array after the first index and return it

function tail(array) {
  const tail = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== 0) {
      tail.push(array[i]);
    }
  }
  return tail;
}

// make a new variable
// make a for loop to go through the array
// if the arry is not on the first index
// push the arry item to the variable
// return variable
