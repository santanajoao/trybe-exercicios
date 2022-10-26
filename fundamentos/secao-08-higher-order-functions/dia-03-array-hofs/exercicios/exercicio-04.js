const books = require('../books-data');

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.´
const daysTillNow = (book) => new Date().getFullYear() - book.releaseYear;

const oldBooksOrdered = (booksArray) => booksArray.filter((book) =>
  daysTillNow(book) > 60).sort((a, b) => a.releaseYear - b.releaseYear);

console.log(oldBooksOrdered(books));

module.exports = oldBooksOrdered;
