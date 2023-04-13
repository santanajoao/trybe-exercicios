function validateDifficulty(req, _res, next) {
  const VALID_DIFFICULTIES = ['Fácil', 'Médio', 'Difícil'];
  const { difficulty } = req.body.description;

  const isValid = VALID_DIFFICULTIES.includes(difficulty);
  if (!isValid) {
    const lastIndex = VALID_DIFFICULTIES.length - 1;
    const lastDifficulty = VALID_DIFFICULTIES[lastIndex];
    const difficultiesWithoutLastString = VALID_DIFFICULTIES
      .slice(0, lastIndex).join(', ');

    return next({
      status: 400,
      message: 'O campo "difficulty" deve ser '
      + `${difficultiesWithoutLastString} ou ${lastDifficulty}`,
    });
  }

  next();
}

module.exports = validateDifficulty;