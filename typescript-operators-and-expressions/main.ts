const width: number = 3;
const height: number = 5;

const area: number = width * height;
console.log(`value of area: ${area}`);
console.log(`typeof the area: ${typeof area}`);

const bill: number = 9.99;
const payment: number = 10.0;
const change: number = payment - bill;
console.log(`value of change: ${change}`);
console.log(`typeof the change: ${typeof change}`);

const quizzes: number = 80;
const midterm: number = 88;
const final: number = 99;
const grade: number = (quizzes + midterm + final) / 3;
console.log(`value of grade: ${grade}`);
console.log(`typeof the grade: ${typeof grade}`);

const firstName: string = 'William';
const lastName: string = 'Zhang';
const fullName: string = firstName + ' ' + lastName;
console.log(`value of fullName: ${fullName}`);
console.log(`typeof the fullName: ${typeof fullName}`);

const pH: number = 6;
const isAcidic: boolean = pH < 7;
console.log(`value of the isAcidic: ${isAcidic}`);
console.log(`typeof the isAcidic: ${typeof isAcidic}`);

const headCount: number = 9;
const isSparta: boolean = headCount === 300;
console.log(`value oof the isSparta: ${isSparta}`);
console.log(`typeof the isSparta: ${typeof isSparta}`);

let motto: string = fullName;
motto += ' is the GOAT';
console.log(`value of the motto: ${motto}`);
console.log(`typeof the motto: ${typeof motto}`);
