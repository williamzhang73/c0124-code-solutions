interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  perviousOccupation?: string;
}

const student: StudentProps = {
  firstName: 'William',
  lastName: 'Zhang',
  age: 33,
};

const fullName: string = `${student.firstName} ${student.lastName}`;
console.log(`the value of fullName: ${fullName}`);

student.livesInIrvine = false;
student.perviousOccupation = 'driver';
console.log(`the value of livesInIrvine: ${student.livesInIrvine}`);
console.log(`the value of previousOccupation: ${student.perviousOccupation}`);
console.log(`the value of student: `, student);
interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'tesla',
  model: 'model Y',
  year: 2023,
};
vehicle['color'] = 'grey';
vehicle['isConvertible'] = true;
console.log(`the value of color: ${vehicle['color']}`);
console.log(`the value of isConvertible: ${vehicle['isConvertible']}`);

console.log(`the value of object vehicle: `, vehicle);

interface Pet {
  name?: string;
  kind?: string;
}

const pet: Pet = {
  name: '',
  kind: '',
};

delete pet.name;
delete pet.kind;

console.log(`the value of the object pet: `, pet);
