import { readFile, writeFile } from 'node:fs/promises';

const read = process.argv[2];
const write = process.argv[3];

try {
  const newfile = await readFile(read, 'utf-8');
  await writeFile(write, newfile);
} catch (err) {
  console.log(err);
}
