'use strict';
const student = {
  firstName: 'William',
  lastName: 'Zhang',
  age: 33,
};
const fullName = `${student.firstName} ${student.lastName}`;
console.log(`the value of fullName: ${fullName}`);
student.livesInIrvine = false;
student.perviousOccupation = 'driver';
console.log(`the value of livesInIrvine: ${student.livesInIrvine}`);
console.log(`the value of previousOccupation: ${student.perviousOccupation}`);
console.log(`the value of student: `, student);
const vehicle = {
  make: 'tesla',
  model: 'model Y',
  year: 2023,
};
vehicle['color'] = 'grey';
vehicle['isConvertible'] = true;
console.log(`the value of color: ${vehicle['color']}`);
console.log(`the value of isConvertible: ${vehicle['isConvertible']}`);
console.log(`the value of object vehicle: `, vehicle);
const pet = {
  name: '',
  kind: '',
};
delete pet.name;
delete pet.kind;
console.log(`the value of the object pet: `, pet);
