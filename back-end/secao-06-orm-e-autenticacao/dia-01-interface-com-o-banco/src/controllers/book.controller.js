const { BookService } = require('../services');

const handleGetAllBooks = async (_req, res) => {
  const { type, message } = await BookService.findAllBooks();
  if (type) {
    return res.status(200).json({ message });
  }
  res.status(200).json(message);
};

module.exports = {
  handleGetAllBooks,
};
