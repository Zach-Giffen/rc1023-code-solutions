/* exported capitalize */
// return the first index of the word with .toUpperCase

function capitalize(word) {
  const firstLetter = word[0].toUpperCase();
  const otherLetter = word.slice(1).toLowerCase();
  return firstLetter + otherLetter;
}

// put the first letter in a variable as a capital
// put the rest of the letters in a variable as lowercase
// return both variables concatinated
