/* exported pick */
// create a function called pick with two argumentsd source and keys
// createa an empty object as a varaible
// loop through the object with for i=0
// if key is in keys
// then push it thouhg to a new object

function pick(source, keys) {
  const obj = {};
  for (const key in source) {
    if (keys.includes(key)) {
      obj[key] = source[key];
    }
  }
  return obj;
}
