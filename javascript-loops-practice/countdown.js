/* exported countdown */
function countdown(number) {
  const numberlist = [];
  while (number >= 0) {
    numberlist.push(number);
    number--;
  }
  return numberlist;
}
