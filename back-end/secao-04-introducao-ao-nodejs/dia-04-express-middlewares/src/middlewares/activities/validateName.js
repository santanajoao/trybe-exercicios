const BAD_REQUEST = 400;

function validateName(req, _res, next) {
  const MIN_LENGTH = 5;

  const { name } = req.body;
  if (!name) {
    return next({
      status: BAD_REQUEST,
      message: 'O campo "name" é obrigatório',
    });
  }

  if (name.length < MIN_LENGTH) {
    return next({
      status: BAD_REQUEST,
      message: `O campo "name" deve ter pelo menos ${MIN_LENGTH} caracteres`,
    });
  }

  next();
}

module.exports = validateName;
