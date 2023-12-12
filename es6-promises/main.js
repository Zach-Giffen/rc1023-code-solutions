import { takeAChance } from './take-a-chance.js';
const promise = takeAChance('Zach');
promise.then((res) => console.log(res)).catch((err) => console.log(err));
