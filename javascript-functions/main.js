function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log('minutes to seconds result:', convertMinutesToSeconds(5));

function greet(name) {
  return 'Hey ' + name;
}

console.log('greeting:', greet('Rob'));

function getArea(width, height) {
  return width * height;
}

console.log('get area result:', getArea(12, 5));

function getFirstName(person) {
  return person.firstName;
}

console.log(
  'get First Name result:',
  getFirstName({ firstName: 'Zach', lastName: 'Giffen' })
);

function getLastElement(array) {
  return array[array.length - 1];
}

console.log(
  'get last element result:',
  getLastElement(['hot', 'cold', 'mild'])
);
