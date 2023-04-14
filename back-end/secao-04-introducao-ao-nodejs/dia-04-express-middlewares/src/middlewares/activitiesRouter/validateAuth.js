const isNullish = require('../../utils/isNullish');
const { checkTokenExistense } = require('../../utils/turismData');

function validateAuth(req, _res, next) {
  const TOKEN_LENGHT = 16;
  const token = req.get('Authorization');
  const isInvalidToken = isNullish(token) || token.lenght !== TOKEN_LENGHT;
  if (isInvalidToken) {
    return next({ status: 401, message: 'Token inválido' });
  }

  const existentToken = checkTokenExistense(token);
  if (!existentToken) {
    return next({ status: 401, message: 'Token inexistente' });
  }

  next();
}

module.exports = validateAuth;