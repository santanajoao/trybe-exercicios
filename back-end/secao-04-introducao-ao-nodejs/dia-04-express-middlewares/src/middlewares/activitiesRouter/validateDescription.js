const isNullish = require('../utils/isNullish');

function validateDescription(req, _res, next) {
  const { description } = req.body;
  if (isNullish(description)) {
    return next({
      status: 400,
      message: 'O campo "description" é obrigatório',
    });
  }

  const requiredKeys = ['createdAt', 'rating', 'difficulty'];
  for (let index = 0; index < requiredKeys.length; index += 1) {
    const key = requiredKeys[index];
    if (!(key in description)) {
      return next({ status: 400, message: `O campo "${key}" é obrigatório` });
    }
  }

  next();
}

module.exports = validateDescription;
