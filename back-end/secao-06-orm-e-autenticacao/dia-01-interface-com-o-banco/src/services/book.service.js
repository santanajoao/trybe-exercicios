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

const addBook = async ({ title, author, pageQuantity }) => {
  const error = validations.validatePageQuantity(pageQuantity);
  if (error.type) return error;

  const createdBook = await Book.create({
    title, author, pageQuantity,
  });
  
  return { type: null, message: createdBook };
};

const updateBook = async (bookId, { title, author, pageQuantity }) => {
  const idError = validations.validateId(bookId);
  if (idError.type) return idError;

  const pageQuantityError = validations.validatePageQuantity(pageQuantity);
  if (pageQuantityError.type) return pageQuantityError;

  const book = await Book.findByPk(bookId);
  if (!book) {
    return { type: 'BOOK_NOT_FOUND', message: 'Book not found' };
  }

  await Book.update(
    { title, author, pageQuantity }, { where: { id: bookId } },
  );
  const updatedBook = await Book.findByPk(bookId);

  return { type: null, message: updatedBook };
};

module.exports = {
  findAllBooks,
  findBookById,
  addBook,
  updateBook,
};
