function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('convertMinutesToSeconds result:', convertMinutesToSeconds(5));
function greet(name) {
  return 'Hey ' + name;
}
console.log('greeting:', greet('Jontron'));
function getArea(width, height) {
  return width * height;
}
console.log('getArea result:', getArea(12, 5));
function getFirstName(person) {
  return person.firstName;
}
console.log(
  'getFirstName result:',
  getFirstName({ firstName: 'John', lastName: 'Yakuza' })
);
function getLastElement(array) {
  return array[array.length - 1];
}
console.log('getLastElement result:', getLastElement(['hot', 'cold', 'mild']));
