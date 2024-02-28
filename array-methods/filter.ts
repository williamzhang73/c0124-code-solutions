const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna',
];

const evens = numbers.filter((element) => {
  return element % 2 === 0;
});
console.log('evens: ', evens);

const filteredName = names.filter((element) => {
  return !element.includes('D') && !element.includes('d');
});

console.log('filteredName: ', filteredName);
