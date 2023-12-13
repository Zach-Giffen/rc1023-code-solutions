import { readFile } from 'node:fs/promises';

const file = process.argv[2];
console.log(file);

try {
  const message = await readFile(file, 'utf-8');
  console.log(message);
} catch (err) {
  console.log(err);
}
