const { Book } = require('../models');

const findAllBooks = async () => {
  const books = await Book.findAll();
  return books;
};

module.exports = {
  findAllBooks,
};
