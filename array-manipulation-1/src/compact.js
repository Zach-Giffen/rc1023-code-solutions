/* exported compact */
// create new variable
// loop though array
// check if array index is not equal to false
// push to variable
// return variable

function compact(array) {
  const arr = [];
  for (let i = 0; i < array.length; i++)
    if (array[i]) {
      arr.push(array[i]);
    }
  return arr;
}

// create new variable
// loop though array
// check if array is truthy
// push to variable
// return variable
