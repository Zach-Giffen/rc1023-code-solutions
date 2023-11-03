/* exported omit */
// create a function called omit with two arguments source, and keys
// create a new variable with an empty object
// create another empty object
// for key in source loop
// if the keys include key
// then set the first obj to equel the key
// otherwise set the second object to equel the key
// return the second object

function omit(source, keys) {
  const obj = {};
  const obj2 = {};
  for (const key in source) {
    if (keys.includes(key)) {
      obj[key] = source[key];
    } else {
      obj2[key] = source[key];
    }
  }
  return obj2;
}
