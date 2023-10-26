/* exported getKeys */
// return the key value

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

// make an empty array
// check for key in the objects
// push the key into the array
// return the array
