/* exported invert */
// create a function called invert with one argumnet source
// set an empty object
// for key in source
// set the source at the key in the empty object to the key
// return the object

function invert(source) {
  const obj = {};
  for (const key in source) {
    obj[source[key]] = key;
  }
  return obj;
}
