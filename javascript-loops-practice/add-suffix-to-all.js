/* exported addSuffixToAll */
function addSuffixToAll(words, suffix) {
  const list = [];
  for (let i = 0; i < words.length; i++) {
    list.push(words[i] + suffix);
  }
  return list;
}
