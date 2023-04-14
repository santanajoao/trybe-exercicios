const isNullish = require('../../utils/isNullish');

const BAD_REQUEST = 400;

function validatePrice(req, _res, next) {
  const { price } = req.body;

  if (isNullish(price)) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "price" é obrigatório',
    });
  }

  if (price < 0 || typeof price !== 'number') {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "price" deve ser um número maior ou igual a zero',
    });
  }

  next();
}

module.exports = validatePrice;
