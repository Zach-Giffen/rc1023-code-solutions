/* exported getValues */
// return the value index of the object

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}

// make an empty array
// for any key in the object
// push the object key to the variable
// return variable
