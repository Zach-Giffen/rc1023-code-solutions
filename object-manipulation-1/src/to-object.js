/* exported toObject */
// create an empty object
// push the arrays into the object
// return object

function toObject(keyValuePair) {
  const object = { [keyValuePair[0]]: keyValuePair[1] };
  return object;
}

// made an object, and put the diffrent indexs of the array in there at the approrite spot
