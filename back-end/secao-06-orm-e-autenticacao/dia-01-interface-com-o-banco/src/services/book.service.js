const { Book } = require('../models');
const validations = require('./validations');

const findAllBooks = async () => {
  const books = await Book.findAll();
  return { type: null, message: books };
};

const findBookById = async (bookId) => {
  const error = validations.validateId(bookId);
  if (error.type) return error;

  const book = await Book.findByPk(bookId);
  if (!book) {
    return { type: 'BOOK_NOT_FOUND', message: 'Book not found' };
  }
  return { type: null, message: book };
};

module.exports = {
  findAllBooks,
  findBookById,
};
