import { add } from './add.js';
import { subtract } from './subtract.js';
import { multiply } from './multiply.js';
import { divide } from './divide.js';

const val1 = process.argv[2];
const opp = process.argv[3];
const val2 = process.argv[4];

const x: number = +val1;
const y: number = +val2;

if (opp === 'plus') {
  console.log(add(x, y));
} else if (opp === 'minus') {
  console.log(subtract(x, y));
} else if (opp === 'times') {
  console.log(multiply(x, y));
} else if (opp === 'over') {
  console.log(divide(x, y));
} else {
  console.log('Please input correct phrasing');
}
