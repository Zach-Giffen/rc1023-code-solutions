/* exported takeRight */
// create a function calling two arguments, array and count
// check if the count is greater than the array value
// if it is just return the array
// otherwise slice the array at the array length - count

function takeRight(array, count) {
  if (array.length < count) {
    return array;
  }
  return array.slice(array.length - count);
}
