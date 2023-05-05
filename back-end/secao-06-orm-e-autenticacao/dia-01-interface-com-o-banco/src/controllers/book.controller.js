const { BookService } = require('../services');

const handleGetAllBooks = async (_req, res) => {
  const { type, message } = await BookService.findAllBooks();
  if (type) {
    return res.status(400).json({ message });
  }
  res.status(200).json(message);
};

const handleGetBookById = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await BookService.findBookById(id);
  if (type) {
    return res.status(400).json({ message });
  }
  res.status(200).json(message);
};

module.exports = {
  handleGetAllBooks,
  handleGetBookById,
};
