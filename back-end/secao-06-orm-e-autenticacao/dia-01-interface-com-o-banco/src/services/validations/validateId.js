const validateId = (id) => {
  const MIN_ID = 1;

  if (Number.isNaN(id)) {
    return { type: 'INVALID_VALUE', message: '"id" should be a number' };
  }

  if (id < MIN_ID) {
    return {
      type: 'INVALID_VALUE',
      message: '"id" should be greater than zero',
    };
  }

  return { type: null, message: '' };
};

module.exports = validateId;
