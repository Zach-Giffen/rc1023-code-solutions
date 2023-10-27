/* exported capitalizeWord */
// return the word with index 0 capatilized and the other letters sliced and lowerecased

function capitalizeWord(word) {
  const wordle = word[0].toUpperCase() + word.slice(1).toLowerCase();
  if (wordle === 'Javascript') {
    return 'JavaScript';
  }
  return wordle;
}

// make a variable with the first letter of word capatalized, and the rest of the word lowercase
// check if the word is javascript
// if it is, return it as javaScript
// otherwise return the word as is
