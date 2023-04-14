const { isEmail } = require('validator');
const isNullish = require('../../utils/isNullish');

const UNAUTHORIZED = 401;

function validateEmail(req, res, next) {
  const { email } = req.body;

  if (isNullish(email)) {
    return next({
      status: UNAUTHORIZED, message: 'O campo "email" é obrigatório',
    });
  }

  if (!isEmail(email)) {
    return next({
      status: UNAUTHORIZED, message: 'O campo "email" deve ser um email válido',
    });
  }

  next();
}

module.exports = validateEmail;
