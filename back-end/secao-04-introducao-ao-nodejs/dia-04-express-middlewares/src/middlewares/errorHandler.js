function errorHandler(err, _req, res, _next) {
  const BAD_REQUEST = 500;

  const { status = BAD_REQUEST, message } = err;
  if (status === BAD_REQUEST) {
    console.error(message);
  
    return res.status(BAD_REQUEST).json({
      message: `Sorry! Some internal error ocurred: ${message}`,
    });
  }
  res.status(status).json({ message });
}

module.exports = errorHandler;
