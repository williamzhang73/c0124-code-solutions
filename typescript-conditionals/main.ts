/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  return number < 5;
}
console.log('if 4 under 5: ', isUnderFive(4));
console.log('if 10 under 5: ', isUnderFive(10));
console.log('if 5 under 5: ', isUnderFive(5));

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log('4 is even: ', isEven(4));
console.log('10 is even: ', isEven(10));
console.log('5 is even: ', isEven(5));

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
console.log('if JavaScript start with "J": ', startsWithJ('JavaScript'));
console.log('if PHP start with "J": ', startsWithJ('PHP'));
console.log('if HTML start with "J": ', startsWithJ('HTML'));
console.log('if Java start with "J": ', startsWithJ('Java'));
console.log('if Kotlin start with "J": ', startsWithJ('Kotlin'));
console.log('if C# start with "J": ', startsWithJ('C#'));

interface Person {
  name: string;
  age: number;
}
function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
const bart: Person = {
  name: 'Bartholomew JoJo Simpson',
  age: 10,
};
console.log('value of isOldEnoughToDrink: ', isOldEnoughToDrink(bart));

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
const homer: Person = {
  name: 'Homer Jay Simpson',
  age: 39,
};
console.log('value of isOldEnoughToDrive: ', isOldEnoughToDrive(homer));

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

const henry: Person = {
  name: 'Henry Simpson',
  age: 18,
};
console.log(
  'value of isOldEnoughToDrinkAndDrive: ',
  isOldEnoughToDrinkAndDrive(henry)
);

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH >= 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH <= 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

console.log('pH of -1: ', categorizeAcidity(-1));
console.log('pH of 14.0000001: ', categorizeAcidity(14.0000001));
console.log('pH of 7: ', categorizeAcidity(7));
console.log('pH of 2: ', categorizeAcidity(2));
console.log('pH of 9: ', categorizeAcidity(9));

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";
    case 'wakko':
      return "We're the warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight everybody';
  }
}
console.log('return value with yakko: ', introduceWarnerBro('yakko'));
console.log('return value with wakko: ', introduceWarnerBro('wakko'));
console.log('return value with dot: ', introduceWarnerBro('dot'));
console.log('return value with cody: ', introduceWarnerBro('cody'));
console.log('return value with minerva: ', introduceWarnerBro('minerva'));

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';
    case 'comedy':
      return 'The Big Lebowski';
    case 'horror':
      return 'Night Swim';
    case 'drama':
      return 'Nowhere';
    case 'musical':
      return 'Wish';
    case 'sci-fi':
      return 'Interstellar';
    default:
      return 'Genre not recognized. Choose between action, comedy, horror, drama, musical, or sci-fi';
  }
}
console.log('value of recommendMovie: ', recommendMovie('action'));
console.log('value of recommendMovie: ', recommendMovie('comedy'));
console.log('value of recommendMovie: ', recommendMovie('random'));
