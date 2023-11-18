/* exported chunk */
// create a function with two argument, array and size
// create a new varaible called arr as an empty array
// loop through the array with i
// check if i divided by the size leaves a remainder and equels 0
// if it does slice array starting at i, and going for the size + i and put into arr
// return arr

function chunk(array, size) {
  const arr = [];
  for (let i = 0; i < array.length; i++) {
    if (i % size === 0) {
      arr.push(array.slice(i, size + i));
    }
  }
  return arr;
}
