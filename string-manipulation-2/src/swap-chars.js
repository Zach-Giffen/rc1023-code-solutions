/* exported swapChars */
// make a new variable called swap and put the split string in there
// swap the characters at the indexes
// return the variable swap joined

function swapChars(firstIndex, secondIndex, string) {
  let swapped = '';
  for (let i = 0; i < string.length; i++)
    if (i === firstIndex) {
      swapped += string[secondIndex];
    } else if (i === secondIndex) {
      swapped += string[firstIndex];
    } else {
      swapped += string[i];
    }
  return swapped;
}

// make a new function with three paramaters (firstIndex, secondIndex, string)
// make an empty string variable called swapped
// loop throught the string with i
// check if i is equel to the first index
// add the second index to the swapped string
// check if i is equel to the second index
// sadd the first index to the swapped string
// otherwise, add the current i index to the swapped string
// return swapped
