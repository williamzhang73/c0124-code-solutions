'use strict';
const colors = ['red', 'white', 'blue'];
console.log('value of color[0]: ', colors[0]);
console.log('value of color[1]: ', colors[1]);
console.log('value of color[2]: ', colors[2]);
console.log(
  'America is ' + colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2] + '.'
);
colors[2] = 'green';
console.log(
  'Mexico is ' + colors[0] + ', ' + colors[1] + ', ' + 'and ' + colors[2] + '.'
);
console.log('value of colors: ', colors);
const student = ['Leo', 'Will', 'Tom', 'Michelle'];
const numberOfStudents = student.length;
console.log(`There are ${numberOfStudents} students in the class`);
const lastIndex = numberOfStudents - 1;
const lastStudent = student[lastIndex];
console.log(`The last student in the array is ${lastStudent}`);
console.log(`value of student: `, student);
