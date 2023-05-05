const { BookService } = require('../services');

const handleGetAllBooks = (_req, res) => {
  const books = BookService.findAllBooks();
  res.status(200).json(books)
};

module.exports = {
  handleGetAllBooks,
};
