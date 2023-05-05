const BookMiddleware = require('./book.middleware');

const error = (err, _req, res, next) => {
  if (err.message) {
    console.error(err.message);
    return res.status(500).json({ message: 'Ops! Algum erro interno ocorreu' });
  }

  next();
};

module.exports = {
  BookMiddleware,
  error,
};
