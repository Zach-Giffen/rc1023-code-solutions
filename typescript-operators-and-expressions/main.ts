const width: number = 5;
const height: number = 12;
const area: number = width * height;
console.log('value of area:', area);
console.log('typeof area:', typeof area);

const bill: number = 10;
const payment: number = 15;
const change: number = payment - bill;
console.log('value of change:', change);
console.log('typeof change:', typeof change);

const quizzes: number = 90;
const midterm: number = 75;
const final: number = 85;
const grade: number = (quizzes + midterm + final) / 3;
console.log('value of grade:', grade);
console.log('typeof grade:', typeof grade);

const firstName: string = 'Zach';
const lastName: string = 'Giffen';
const fullName: string = firstName + ' ' + lastName;
console.log('value of fullName:', fullName);
console.log('typeof fullName:', typeof fullName);

const pH: number = 8;
const isAcidic: boolean = pH < 7;
console.log('value of isAcidic:', isAcidic);
console.log('typeof isAcidic:', typeof isAcidic);

const headcount: number = 500;
const isSparta: boolean = headcount === 300;
console.log('value of isSparta:', isSparta);
console.log('typeof isSparta:', typeof isSparta);

let motto: string = fullName;
motto += ' is the GOAT';
console.log('value of motto:', motto);
console.log('typeof motto:', typeof motto);
