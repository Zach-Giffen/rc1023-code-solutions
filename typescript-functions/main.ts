function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('convertMinutesToSeconds result:', convertMinutesToSeconds(5));

function greet(name: string): string {
  return 'Hey ' + name;
}

console.log('greeting:', greet('Jontron'));

function getArea(width: number, height: number): number {
  return width * height;
}

console.log('getArea result:', getArea(12, 5));

interface Person {
  firstName: string;
  lastName: string;
}

function getFirstName(person: Person): string {
  return person.firstName;
}

console.log(
  'getFirstName result:',
  getFirstName({ firstName: 'John', lastName: 'Yakuza' })
);

type Element = [string, string, string];

function getLastElement(array: Element): string {
  return array[array.length - 1];
}

console.log('getLastElement result:', getLastElement(['hot', 'cold', 'mild']));
