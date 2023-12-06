var student = {
  firstName: 'Zach',
  lastName: 'Giffen',
  age: 24,
};
var fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'caretaker';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);
var vehicle = {
  make: 'ford',
  model: 'focus',
  year: 2012,
};
vehicle['color'] = 'silver';
vehicle['isConvertable'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertable:', vehicle['isConvertable']);
console.log('value of vehicle:', vehicle);
var pet = {
  name: 'max',
  kind: 'dog',
};
delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
