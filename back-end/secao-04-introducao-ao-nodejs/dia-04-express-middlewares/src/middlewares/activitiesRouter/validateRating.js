function validateRating(req, _res, next) {
  const MIN_RATING = 1;
  const MAX_RATING = 5;

  const { rating } = req.body.description;
  const isInteger = parseInt(rating, 10) === rating;
  const inValidInterval = rating >= 1 && rating <= 5;

  if (!isInteger || !inValidInterval) {
    return next({
      status: 400,
      message: `O campo "rating" deve ser um número inteiro entre ${MIN_RATING} e ${MAX_RATING}`,
    });
  }

  next();
}

module.exports = validateRating;
