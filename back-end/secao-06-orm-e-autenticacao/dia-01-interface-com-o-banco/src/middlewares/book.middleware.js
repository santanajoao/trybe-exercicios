const isNullish = require('../utils/isNullish');

const checkForBook = (req, res, next) => {
  const { title, author, pageQuantity } = req.body;

  if (isNullish(title)) {
    return res.status(400).json({ message: '"title" is required' });
  }

  if (isNullish(author)) {
    return res.status(400).json({ message: '"author" is required' });
  }

  if (isNullish(pageQuantity)) {
    return res.status(400).json({ message: '"pageQuantity" is required' });
  }

  next();
};

module.exports = {
  checkForBook,
};
