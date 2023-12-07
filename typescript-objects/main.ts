interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'Zach',
  lastName: 'Giffen',
  age: 24,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName:', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'caretaker';
console.log('value of livesInIrvine:', student.livesInIrvine);
console.log('value of previousOccupation:', student.previousOccupation);
console.log('value of student:', student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertable?: boolean;
}

const vehicle: Vehicle = {
  make: 'ford',
  model: 'focus',
  year: 2012,
};
vehicle['color'] = 'silver';
vehicle['isConvertable'] = false;
console.log('value of color:', vehicle['color']);
console.log('value of isConvertable:', vehicle['isConvertable']);
console.log('value of vehicle:', vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: 'max',
  kind: 'dog',
};

delete pet.name;
delete pet.kind;
console.log('value of pet:', pet);
