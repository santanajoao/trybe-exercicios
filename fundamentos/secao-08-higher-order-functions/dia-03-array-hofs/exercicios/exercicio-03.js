const books = require('../books-data');

//Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.
const fantasyOrScienceFiction = (booksArray) => booksArray.filter((book) => 
  book.genre === 'Ficção Científica' || book.genre === 'Fantasia');

console.log(fantasyOrScienceFiction(books));

module.exports = fantasyOrScienceFiction;
