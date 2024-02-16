interface Books {
  isbn: string;
  title: string;
  author: string;
}
const books: Books[] = [
  { isbn: '1111', title: 'Bright Young Women', author: 'Urban' },
  { isbn: '2222', title: 'A Court of Thorns and Roses', author: 'Meijer' },
  { isbn: '3333', title: 'Good Material: A Novel', author: 'Outfitters' },
];

console.log('Array books: ', books);
console.log('type of books: ', typeof books);

const booksString = JSON.stringify(books);
console.log('bookString: ', booksString);
console.log('type of bookString: ', typeof booksString);

interface Student {
  id: number;
  name: string;
}
const student = '{"id": "11111","name": "William" }';
console.log('student: ', student);
console.log('typeof student: ', typeof student);

const studentObject: Student = JSON.parse(student);
console.log('studentObject: ', studentObject);
console.log('typeof studentObject: ', typeof studentObject);
