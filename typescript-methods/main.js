'use strict';
const heroes = ['Superman', 'Ironman', 'Spiderman', 'Batman'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log(`the randomIndex is: ${randomIndex}`);
const randomHero = heroes[randomIndex];
console.log(`the randomHero is: ${randomHero}`);
const book1 = {
  title: 'JavaScript from Beginner to Professional',
  author: 'Laurence Lars Svekis',
};
const book2 = {
  title: 'Squarespace from Signup to Launch',
  author: 'Kelsey Gilbert Kreiling',
};
const book3 = {
  title: 'JavaScript and jQuery',
  author: 'Jon Duckett',
};
const library = [book1, book2, book3];
const lastBook = library.pop();
console.log('value of lastBook is: ', lastBook);
const firstBook = library.shift();
console.log('value of firstBook: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
const libraryLength = library.length;
console.log(`the length of library is: ${libraryLength}`);
library.splice(1, 1);
console.log('value of library is: ', library);
const fullName = 'William Zhang';
const firstAndLastName = fullName.split(' ');
console.log('value of firstAndLastName is: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('value of sayMyName is: ', sayMyName);
const employee = {
  name: 'William',
  age: 33,
  position: 'manager',
};
const employeeKeys = Object.keys(employee);
console.log('value of employeeKeys are: ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('value of employeeValues are: ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('value of employeePairs are: ', employeePairs);
