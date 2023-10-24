const colors = ['red', 'white', 'blue'];

console.log('value of colors[0]', colors[0]);
console.log('value of colors[1]', colors[1]);
console.log('value of colors[2]', colors[2]);

const string =
  'America is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(string);

colors[2] = 'green';

const string2 =
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', and ' + colors[2] + '.';
console.log(string2);

console.log(colors);

const students = ['Zach', 'Jack', 'Mack', 'Benny'];

const numberOfStudents = students.length;
console.log('there are', numberOfStudents, 'students in the class.');

const lastIndex = students.length - 1;

const lastStudent = students[lastIndex];
console.log('The last student in the array is', lastStudent);

console.log(students);
