/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen(): number[] {
  const numbers = [];
  let currentNumber = 1;
  while (currentNumber <= 10) {
    numbers.push(currentNumber);
    currentNumber++;
  }
  return numbers;
}

function getEvenNumbersToTwenty(): number[] {
  const evenNumbers = [];
  let currentNumber = 2;
  while (currentNumber <= 20) {
    evenNumbers.push(currentNumber);
    currentNumber += 2;
  }
  return evenNumbers;
}

function repeatWord(word: string, times: number): string {
  let count = 1;
  let repeated = '';
  while (count <= times) {
    repeated = repeated.concat(word);
    count++;
  }

  return repeated;
}

function logEachCharacter(string: string): void {
  for (let i = 0; i < string.length; i++) {
    console.log(`value at index ${i}: `, string[i]);
  }
}

function doubleAll(numbers: number[]): number[] {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}

/* interface Object {
  firstName: 'William';
  lastName: 'Zhang';
} */

function getKeys(object: Record<string, unknown>): string[] {
  const keys = [];
  for (const key in object) {
    keys.push(key);
  }
  return keys;
}

function getValues(object: Record<string, unknown>): any {
  const values = [];
  for (const key in object) {
    values.push(object[key]);
  }
  return values;
}
