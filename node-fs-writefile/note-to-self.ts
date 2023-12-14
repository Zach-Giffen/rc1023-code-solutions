import { writeFile } from 'node:fs/promises';

const find = process.argv[2];

try {
  await writeFile('note.txt', find);
} catch (err) {
  console.log(err);
}
