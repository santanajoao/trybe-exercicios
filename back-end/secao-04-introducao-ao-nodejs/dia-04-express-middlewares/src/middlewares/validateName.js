const isNullish = require('../utils/isNullish');

function validateName(req, _res, next) {
  const BAD_REQUEST = 400;
  const { name } = req.body;
  if (isNullish(name)) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "name" é obrigatório',
    });
  }

  const MIN_LENGTH = 5;
  if (typeof name !== 'string' || name.length < MIN_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: `O campo "name" deve ter pelo menos ${MIN_LENGTH} caracteres`,
    });
  }

  next();
}

module.exports = validateName;
