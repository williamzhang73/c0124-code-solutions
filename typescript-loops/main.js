'use strict';
/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}
console.log('value of getNumbersToTen is: ', getNumbersToTen());
function getEvenNumbersToTwenty() {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}
console.log(getEvenNumbersToTwenty());
function repeatWord(word, times) {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated = repeated.concat(word);
    count++;
  }
  return repeated;
}
console.log('value of repeatWord: ', repeatWord('word', 3));
function logEachCharacter(string) {
  for (let i = 0; i < string.length; i++) {
    console.log(`value at index ${i}: `, string[i]);
  }
}
logEachCharacter('Hello World');
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
console.log('value of doubleAll: ', doubleAll([1, 2, 3]));
/* interface Object {
  firstName: 'William';
  lastName: 'Zhang';
} */
const person = {
  firstName: 'William',
  lastName: 'Zhang',
};
function getKeys(object) {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}
console.log('value of getKeys: ', getKeys(person));
function getValues(object) {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
console.log('value of getValues: ', getValues(person));
