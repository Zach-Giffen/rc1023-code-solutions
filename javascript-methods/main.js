const x = 3;
const y = 7;
const z = 9;

const maximumValue = Math.max(x, y, z);

console.log('maximum value result:', maximumValue);

const heroes = ['spiderman', 'Batman', 'Green Arrow', 'Aqua man'];

let randomNumber = Math.random();

randomNumber = randomNumber * heroes.length;

const randomIndex = Math.floor(randomNumber);

console.log('random index result:', randomIndex);

const randomHero = heroes[randomIndex];

console.log('random hero result:', randomHero);

const library = [
  { title: 'Lord of the Rings', author: 'J.R.R. Tolkien' },
  { title: 'Chainsawman', author: 'Tatsuki Fujimoto' },
  { title: 'One Piece', author: 'Oda' },
];

const lastBook = library.pop();

console.log('last book result', lastBook);

const firstBook = library.shift();

console.log('first book result:', firstBook);

const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};

library.push(js);

library.unshift(css);

library.splice(1, 1);

console.log('library result:', library);

const fullName = 'Zach Giffen';

const firstAndLastName = fullName.split(' ');

console.log('first and last name result:', firstAndLastName);

const firstName = firstAndLastName[0];

const sayMyName = firstName.toUpperCase();

console.log('say my name result:', sayMyName);
