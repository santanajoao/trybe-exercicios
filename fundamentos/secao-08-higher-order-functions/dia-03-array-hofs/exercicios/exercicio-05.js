const books = require('../books-data');
// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const isFantasyOrScienceFiction = (book) =>
  book.genre === 'Fantasia' || book.genre === 'Ficção Científica';

const getAuthorName = (book) => book.author.name;

const fantasyOrScienceFictionAuthors = (booksArray) =>
  booksArray.filter(isFantasyOrScienceFiction).map(getAuthorName).sort();

console.log(fantasyOrScienceFictionAuthors(books));

module.exports = fantasyOrScienceFictionAuthors;
