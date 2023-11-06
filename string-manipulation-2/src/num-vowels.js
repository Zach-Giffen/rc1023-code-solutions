/* exported numVowels */
// make empty variable
// loop throught the string
// if there is a value encountered, add 1 to the variable
// return variable

function numVowels(string) {
  let vowles = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] === 'a' ||
      string[i] === 'e' ||
      string[i] === 'i' ||
      string[i] === 'o' ||
      string[i] === 'u' ||
      string[i] === 'A' ||
      string[i] === 'E' ||
      string[i] === 'I' ||
      string[i] === 'O' ||
      string[i] === 'U'
    ) {
      vowles += 1;
    }
  }
  return vowles;
}
