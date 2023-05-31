const { BookService } = require('../services');
const mapErrorToStatus = require('../utils/mapErrorToStatus');

const handleGetBooks = async (req, res) => {
  const { author } = req.query;
  const { type, message } = await BookService.findBooks(author);
  if (type) {
    return res.status(mapErrorToStatus(type)).json({ message });
  }
  res.status(200).json(message);
};

const handleGetBookById = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await BookService.findBookById(id);
  if (type) {
    return res.status(mapErrorToStatus(type)).json({ message });
  }
  res.status(200).json(message);
};

const handlePostBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const { type, message } = await BookService.addBook({
    title, author, pageQuantity,
  });
  
  if (type) {
    return res.status(mapErrorToStatus(type)).json({ message });
  }
  res.status(201).json(message);
};

const handlePutBook = async (req, res) => {
  const id = Number(req.params.id);
  const { title, author, pageQuantity } = req.body;

  const { type, message } = await BookService.updateBook(id, {
    title, author, pageQuantity,
  });

  if (type) {
    return res.status(mapErrorToStatus(type)).json({ message });
  }
  res.status(200).json(message);
};

const handleDeleteBook = async (req, res) => {
  const id = Number(req.params.id);
  const { type, message } = await BookService.deleteBook(id);

  if (type) {
    return res.status(mapErrorToStatus(type)).json({ message });
  }
  res.status(204).end();
};

module.exports = {
  handleGetBooks,
  handleGetBookById,
  handlePostBook,
  handlePutBook,
  handleDeleteBook,
};