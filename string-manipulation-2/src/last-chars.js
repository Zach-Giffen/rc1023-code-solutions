/* exported lastChars */
// return the sliced string starting from the length of the string - the length of the word

function lastChars(length, string) {
  if (length >= string.length) {
    return string;
  }
  return string.slice(string.length - length);
}

// check if the length is longer than the string
// if it is, return the full string
// otherwise return the sliced string starting from the length of the string - the length of the word
