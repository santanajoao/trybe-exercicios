const books = require('../books-data');

const has3DotsOnName = (bookObject) =>
  bookObject.author.name.match(/\./g).length === 3;

// Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.
const authorWith3DotsOnName = (books) => books.find(has3DotsOnName).name;

console.log(authorWith3DotsOnName(books));

module.exports = authorWith3DotsOnName;
