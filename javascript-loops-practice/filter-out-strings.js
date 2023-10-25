/* exported filterOutStrings */
function filterOutStrings(values) {
  const noStringsOnMe = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      noStringsOnMe.push(values[i]);
    }
  }
  return noStringsOnMe;
}
