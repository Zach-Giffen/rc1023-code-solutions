import { readFile } from 'node:fs/promises';

const [, , ...filenames] = process.argv;
console.log(filenames);

const promises = filenames.map((filename) => readFile(filename, 'utf-8'));

try {
  const files = await Promise.all(promises);
  console.log('files', files.join('\n'));
} catch (err) {
  console.log(err);
}
