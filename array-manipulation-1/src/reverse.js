/* exported reverse */
// make a new variable
// loop the array backwards
// push the array indexs into the variable
// return the variable

function reverse(array) {
  const backwards = [];
  for (let i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}
