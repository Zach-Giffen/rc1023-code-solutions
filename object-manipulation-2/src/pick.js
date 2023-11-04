/* exported pick */
// create a function called pick with two argumentsd source and keys
// createa an empty object as a varaible
// loop through the object with for i=0
// if key is in keys
// then push it thouhg to a new object

function pick(source, keys) {
  const obj = {};
  for (const key in source) {
    if (keys.includes(key) && source[key] !== undefined) {
      obj[key] = source[key];
    }
  }
  return obj;
}

// create a function called pick with two arguments source and keys
// create an empty object called obj
// for key in source
// if the key includes the keys and it isnt undefined
// let the new obj be assigned the source key
// return the obj
