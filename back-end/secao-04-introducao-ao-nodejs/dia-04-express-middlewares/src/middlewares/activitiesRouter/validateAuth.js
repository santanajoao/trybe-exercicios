const isNullish = require('../../utils/isNullish');
const { checkTokenExistense } = require('../../utils/turismData');

async function validateAuth(req, _res, next) {
  const TOKEN_LENGHT = 16;
  const token = req.header('Authorization');

  const isInvalidToken = isNullish(token) || token.length !== TOKEN_LENGHT;
  if (isInvalidToken) {
    return next({ status: 401, message: 'Token inválido' });
  }

  const existentToken = await checkTokenExistense(token);
  if (!existentToken) {
    return next({ status: 401, message: 'Token inexistente' });
  }

  next();
}

module.exports = validateAuth;