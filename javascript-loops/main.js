/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */

function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

console.log('get numbers to ten:', getNumbersToTen());

function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

console.log('get even numbers to twenty:', getEvenNumbersToTwenty());

function repeatWord(word, times) {
  let count = 1;
  let repeated = ' ';
  while (count <= times) {
    repeated += word;
    count++;
  }
  return repeated;
}

console.log('repeat word:', repeatWord('hello', 4));

function logEachCharacter(string) {
  let i = 0;
  for (i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

console.log('log each character:', logEachCharacter('Zach'));

function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

console.log('double all:', doubleAll([3, 5, 9, 20]));

const vehicle = {
  make: 'ford',
  model: 'focus',
  year: 2012,
};

function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

console.log('get keys:', getKeys(vehicle));

function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('get values:', getValues(vehicle));
