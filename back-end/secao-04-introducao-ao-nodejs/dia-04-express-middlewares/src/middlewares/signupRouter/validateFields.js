function validateFields(req, _res, next) {
  const REQUIRED_FIELDS = ['email', 'password', 'firstName', 'phone'];
  const UNAUTHORIZED = 401;

  const { body } = req;
  for (let index = 0; index < REQUIRED_FIELDS.length; index += 1) {
    const field = REQUIRED_FIELDS[index];
    if (!(field in body)) {
      return next({
        status: UNAUTHORIZED, message: `O campo "${field}" é obrigatório`,
      });
    }
  }
  
  next();
}

module.exports = validateFields;
