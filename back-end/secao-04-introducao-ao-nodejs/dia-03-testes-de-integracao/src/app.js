const express = require('express');
const { getChocolates, getChocolateById } = require('./helpers/chocolates');

const app = express();

const OK = 200;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

app.get('/chocolates', async (_, res) => {
  try {
    const chocolates = await getChocolates();
    res.status(OK).json({ chocolates });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `Sorry! Some internal error ocurred: ${error.message}`,
    });
  }
});

app.get('/chocolates/:id', async (req, res) => {
  try {
    const requestedId = Number(req.params.id);
    const requestedChocolate = await getChocolateById(requestedId);
    if (requestedChocolate) {
      return res.status(OK).json({ chocolate: requestedChocolate });
    }
    res.status(NOT_FOUND).json({ message: 'Chocolate not found' });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `Sorry! Some internal error ocurred: ${error.message}`,
    });
  }
});

module.exports = app;
