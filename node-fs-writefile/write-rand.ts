import { writeFile } from 'node:fs/promises';

const random: string = Math.random().toString();

try {
  await writeFile('random.txt', random);
  console.log(random);
} catch (err) {
  console.log(err);
}
