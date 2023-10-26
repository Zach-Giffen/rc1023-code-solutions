/* exported reverseWord */
// make a new variable
// make a loop that goes throught each letter in reverse
// put each letter in the new variable
// return the variable

function reverseWord(word) {
  let reverse = [];
  for (let i = word.length - 1; i >= 0; i--) {
    reverse += word[i];
  }
  return reverse;
}
