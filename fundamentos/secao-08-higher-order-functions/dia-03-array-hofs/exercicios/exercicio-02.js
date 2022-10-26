const books = require('../books-data');

// array de objetos
// cada objeto deve conter 
//   a propriedade author com o nome do author
//   a propriedade age com a idade da autora quando o livro foi lancado
// o array deve ser odenado por idade

const ageFromBook = (book) => book.releaseYear - book.author.birthYear;

const objectFromBook = (book) =>
  ({ author: book.author.name, age: ageFromBook(book) });

const nameAndAge = (booksArray) => 
  booksArray.map(objectFromBook).sort((a, b) => a.age - b.age);

console.log(nameAndAge(books));

module.exports = nameAndAge;
