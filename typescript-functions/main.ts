function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}

console.log('total seconds in 5 minutes: ', convertMinutesToSeconds(5));
console.log('total seconds in 10 minutes: ', convertMinutesToSeconds(10));

function greet(name: string): string {
  return `Hey ${name}`;
}
console.log(greet('Beavis'));
console.log(greet('SpongeBob'));

const getArea: (width: number, height: number) => number = (width, height) => {
  return width * height;
};

console.log('the area is: ', getArea(17, 42));
console.log('the area is: ', getArea(22, 38));

interface Person {
  firstName: string;
  lastName: string;
}
const person1: Person = {
  firstName: 'Lelouche',
  lastName: 'Lamperrouge',
};
const person2: Person = {
  firstName: 'John',
  lastName: 'Henry',
};
const getFirstName: (person: Person) => string = (person) => {
  return person.firstName;
};

console.log('the firstName of person1: ', getFirstName(person1));
console.log('the firstName of person2: ', getFirstName(person2));

const getLastElement: (array: any[]) => any = (array) => {
  return array.at(-1);
};

const array1: string[] = ['propane', 'and', 'propane', 'accessories'];
const array2: boolean[] = [true, true, false, true];
console.log('the last element of array1: ', getLastElement(array1));
console.log('the last element of array1: ', getLastElement(array2));

const callOtherFunction: (otherFunction: any, params: unknown) => any = (
  otherFunction,
  params
) => {
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
