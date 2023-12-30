import { readFile, writeFile } from 'node:fs/promises';

const [, , operation, arg1, arg2] = process.argv;
// const operation = process.argv[2];

type Data = {
  nextId: number;
  notes: Record<string, string>;
};

async function getData(): Promise<Data> {
  const file = await readFile('data.json', 'utf-8');
  return JSON.parse(file);
  // return javascript object
}

async function readNotes(): Promise<void> {
  const data = await getData();
  for (const key in data.notes) {
    console.log(`${key}: ${data.notes[key]}`);
  }
}

async function addNote(note: string): Promise<void> {
  if (!note) {
    console.error('A note is required');
    return;
  }
  const data = await getData();
  data.notes[data.nextId] = note;
  data.nextId++;
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

async function deleteNote(id: string): Promise<void> {
  // get data
  const data = await getData();
  // if id is not found - undefined
  if (data.notes[id] === undefined) {
    console.log('invalid id');
    return;
  }
  delete data.notes[id];
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

async function updateNote(id: string, note: string): Promise<void> {
  const data = await getData();
  if (data.notes[id] === undefined) {
    console.log('invalid id');
    return;
  }
  if (!note) {
    console.error('A note is required');
    process.exit(1);
  }
  data.notes[id] = note;
  await writeFile('data.json', JSON.stringify(data, null, 2));
}

try {
  switch (operation) {
    case 'read':
      await readNotes();
      break;
    case 'add':
      await addNote(arg1);
      break;
    case 'delete':
      await deleteNote(arg1);
      break;
    case 'update':
      await updateNote(arg1, arg2);
      break;
    default:
      console.log('please provide a valid operator: add, delete, read, update');
  }
} catch (err) {
  console.log(err);
}
