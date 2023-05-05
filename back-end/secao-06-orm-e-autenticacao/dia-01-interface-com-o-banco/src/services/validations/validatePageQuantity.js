const validatePageQuantity = (pageQuantity) => {
  if (typeof pageQuantity !== 'number' || Number.isNaN(pageQuantity)) {
    return {
      type: 'INVALID_VALUE',
      message: '"pageQuantity" should be a number',
    };
  }

  if (pageQuantity <= 0) {
    return {
      type: 'INVALID_VALUE',
      message: '"pageQuantity" should be greater than zero',
    };
  }

  return { type: null, message: '' };
};

module.exports = validatePageQuantity;
