const express = require('express');
const { getChocolates, getChocolateById } = require('./helpers/chocolates');

const app = express();

const OK = 200;
const NOT_FOUND = 404;
const INTERNAL_SERVER_ERROR = 500;

const INTERNAL_ERROR_MESSAGE = 'Sorry! Some internal error ocurred';

app.get('/chocolates', async (_, res) => {
  try {
    const chocolates = await getChocolates();
    res.status(OK).json({ chocolates });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `${INTERNAL_ERROR_MESSAGE}: ${error.message}`,
    });
  }
});

app.get('/chocolates/:id', async (req, res) => {
  try {
    const requestedId = Number(req.params.id);
    const requestedChocolate = await getChocolateById(requestedId);
    if (requestedChocolate) {
      res.status(OK).json({ chocolate: requestedChocolate });
    } else {
      res.status(NOT_FOUND).json({ message: 'Chocolate not found' });
    }
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({
      message: `${INTERNAL_ERROR_MESSAGE}: ${error.message}`,
    });
  }
});

module.exports = app;
