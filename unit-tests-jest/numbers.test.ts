import { evenNumbers, toDollars, divideBy, multiplyBy } from './numbers';

test('returns the even numbers', () => {
  const numbers = [1, 2, 3, 4, 5];
  const result = evenNumbers(numbers);
  expect(result).toEqual([2, 4]);
});

test('returns a number in dollars', () => {
  const number = 3.456534;
  const result = toDollars(number);
  expect(result).toEqual('$3.46');
});

test('returns an array of numbers that have been divided', () => {
  const numbers = [10, 15, 20, 25, 30];
  const divisor = 2;
  const result = divideBy(numbers, divisor);
  expect(result).toEqual([5, 7.5, 10, 12.5, 15]);
});

test('returns the an object, with number keys multiplied', () => {
  const object = { dogs: 2, frogs: 4, cats: 5 };
  const multiplier = 3;
  const result = multiplyBy(object, multiplier);
  expect(result).toEqual({ dogs: 6, frogs: 12, cats: 15 });
});
