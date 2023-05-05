const validatePageQuantity = (pageQuantity) => {
  if (pageQuantity <= 0) {
    return {
      type: 'INVALID_VALUE',
      message: '"pageQuantity" should be greater than zero',
    };
  }

  return { type: null, message: '' };
};

module.exports = validatePageQuantity;
