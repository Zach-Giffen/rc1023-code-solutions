/* exported dropRight */
// create a function calling two arguments, array and count
// check if array length is less than count
// if it is retunt an epty array
// otherwise return the array sliced starting from index 0, to the array length - count

function dropRight(array, count) {
  if (array.length < count) {
    return [];
  }
  return array.slice(0, array.length - count);
}
