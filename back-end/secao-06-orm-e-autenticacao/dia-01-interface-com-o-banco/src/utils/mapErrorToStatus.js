const mapErrorToStatus = (errorType) => {
  const errorTypes = {
    'BOOK_NOT_FOUND': 404,
    'INVALID_VALUE': 400,
  };

  return errorTypes[errorType] || 500;
};

module.exports = mapErrorToStatus;
