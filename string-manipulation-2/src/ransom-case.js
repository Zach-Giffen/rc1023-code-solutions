/* exported ransomCase */
// make a new variable as empty
// loop throught each letter
// if the letter is odd make it lowercase
// otherwise make it uppercase
// then put the letters in the variable
// return variable

function ransomCase(string) {
  let random = '';
  for (let i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      random += string[i].toLowerCase();
    } else {
      random += string[i].toUpperCase();
    }
  }
  return random;
}
