const values = [10, 1, 22, 23, 41, 5, 18, 7, 80, 9];

console.log('in order:');
values.forEach((e) => console.log(e));

console.log('reverse order:');
values.forEach((_, index, array) => {
  const reverseIndex = array.length - 1 - index;
  console.log(array[reverseIndex]);
});
