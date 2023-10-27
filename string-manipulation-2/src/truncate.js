/* exported truncate */
// return a slice from 0 to length and concatinate with an elipsies

function truncate(length, string) {
  return string.slice(0, length) + '...';
}
