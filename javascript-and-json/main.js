const bookshelf = [
  {
    title: 'Lord of the Rings',
    isbn: '0562956301',
    author: 'J.R.R. Tolkien',
  },
  {
    title: 'Goodbye Eri',
    isbn: '0989998045',
    author: 'Tatsuki Fujimoto',
  },
  {
    title: 'Holy Bible',
    isbn: '9781414302034',
    author: 'Jesus Christ',
  },
];

console.log('bookshelf array:', bookshelf);
console.log('bookshelf type of:', typeof bookshelf);

const bookstring = JSON.stringify(bookshelf);
console.log('json bookshelf:', bookstring);
console.log('type of json bookshelf:', typeof bookstring);

const jsonStudent = '{"name":"Jason","id":100230}';
console.log('json student:', jsonStudent);
console.log('type of json student:', typeof jsonStudent);

const student = JSON.parse(jsonStudent);
console.log('student:', student);
console.log('type of student:', typeof student);
