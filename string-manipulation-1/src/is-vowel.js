/* exported isVowel */
// check if the character is a vowel
// return true
// otherwise return false

function isVowel(character) {
  if (
    character === 'a' ||
    character === 'e' ||
    character === 'i' ||
    character === 'o' ||
    character === 'u' ||
    character === 'A' ||
    character === 'E' ||
    character === 'I' ||
    character === 'O' ||
    character === 'U'
  ) {
    return true;
  }
  return false;
}
