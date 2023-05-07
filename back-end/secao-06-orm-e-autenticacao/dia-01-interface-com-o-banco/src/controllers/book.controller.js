const { BookService } = require('../services');
const mapErrorToStatus = require('../utils/mapErrorToStatus');

const handleGetAllBooks = async (_req, res) => {
  const { type, message } = await BookService.findAllBooks();
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

module.exports = {
  handleGetAllBooks,
  handleGetBookById,
  handlePostBook,
  handlePutBook,
};
