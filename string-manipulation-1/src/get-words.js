/* exported getWords */
// create a new variable with an empty array
// split word at the ' ' and push into a new variable
// return the variable

function getWords(string) {
  if (string === '') {
    return [];
  }
  return string.split(' ');
}

// if the string is empty return a empty array
// otherwise return the split tring
