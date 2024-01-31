'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('total seconds in 5 minutes: ', convertMinutesToSeconds(5));
console.log('total seconds in 10 minutes: ', convertMinutesToSeconds(10));
function greet(name) {
  return `Hey ${name}`;
}
console.log(greet('Beavis'));
console.log(greet('SpongeBob'));
const getArea = (width, height) => {
  return width * height;
};
console.log('the area is: ', getArea(17, 42));
console.log('the area is: ', getArea(22, 38));
const person1 = {
  firstName: 'Lelouche',
  lastName: 'Lamperrouge',
};
const person2 = {
  firstName: 'John',
  lastName: 'Henry',
};
const getFirstName = (person) => {
  return person.firstName;
};
console.log('the firstName of person1: ', getFirstName(person1));
console.log('the firstName of person2: ', getFirstName(person2));
const getLastElement = (array) => {
  return array.at(-1);
};
const array1 = ['propane', 'and', 'propane', 'accessories'];
const array2 = [true, true, false, true];
console.log('the last element of array1: ', getLastElement(array1));
console.log('the last element of array1: ', getLastElement(array2));
const callOtherFunction = (otherFunction, params) => {
  return otherFunction(params);
};
console.log(
  'the return value of function convertMinutesToSeconds: ',
  callOtherFunction(convertMinutesToSeconds, 10)
);
console.log(
  'the return value of function getLastElement: ',
  callOtherFunction(getLastElement, ['hello', 'goodbye', 'Aloha'])
);
