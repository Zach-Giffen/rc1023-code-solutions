/* exported initial */
// make new variable
// loop through the array
// check if the arry index is the last one
// push it to the variable if it isnt
// return the variable

function initial(array) {
  const start = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      start.push(array[i]);
    }
  }
  return start;
}
