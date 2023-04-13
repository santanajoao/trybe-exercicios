function validateCreatedAt(req, res, next) {
  const { createdAt } = req.body.description;
  const dateRegex = /\d{2}\/\d{2}\/\d{4}/;
  const validFormat = dateRegex.test(createdAt);
  if (!validFormat) {
    next({
      status: 400,
      message: 'O campo "createdAt" deve ter o formato "dd/mm/aaa"',
    });
  }

  next();
}

module.exports = validateCreatedAt;
