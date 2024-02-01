const heroes: string[] = ['Superman', 'Ironman', 'Spiderman', 'Batman'];
let randomNumber: number = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log(`the randomIndex is: ${randomIndex}`);
const randomHero: string = heroes[randomIndex];
console.log(`the randomHero is: ${randomHero}`);

interface Book {
  title: string;
  author: string;
}
const book1: Book = {
  title: 'JavaScript from Beginner to Professional',
  author: 'Laurence Lars Svekis',
};
const book2: Book = {
  title: 'Squarespace from Signup to Launch',
  author: 'Kelsey Gilbert Kreiling',
};
const book3: Book = {
  title: 'JavaScript and jQuery',
  author: 'Jon Duckett',
};
const library: Book[] = [book1, book2, book3];
const lastBook: Book | undefined = library.pop();
console.log('value of lastBook is: ', lastBook);

const firstBook: Book | undefined = library.shift();
console.log('value of firstBook: ', firstBook);

const js: Book = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css: Book = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
const libraryLength: number = library.length;
console.log(`the length of library is: ${libraryLength}`);
library.splice(1, 1);
console.log('value of library is: ', library);

const fullName: string = 'William Zhang';
const firstAndLastName: string[] = fullName.split(' ');
console.log('value of firstAndLastName is: ', firstAndLastName);
const firstName: string = firstAndLastName[0];
const sayMyName: string = firstName.toUpperCase();
console.log('value of sayMyName is: ', sayMyName);

interface Employee {
  name: string;
  age: number;
  position: string;
}
const employee: Employee = {
  name: 'William',
  age: 33,
  position: 'manager',
};

const employeeKeys: string[] = Object.keys(employee);
console.log('value of employeeKeys are: ', employeeKeys);

const employeeValues: any[] = Object.values(employee);
console.log('value of employeeValues are: ', employeeValues);

const employeePairs: [string, any][] = Object.entries(employee);
console.log('value of employeePairs are: ', employeePairs);
