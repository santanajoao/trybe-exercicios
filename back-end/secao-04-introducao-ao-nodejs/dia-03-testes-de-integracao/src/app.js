const express = require('express');
const { getChocolates } = require('./helpers/chocolates');

const app = express();
const OK = 200;
const INTERNAL_SERVER_ERROR = 500;

app.get('/chocolates', async (_, res) => {
  try {
    const chocolates = await getChocolates();
    res.status(OK).json({ chocolates });
  } catch (error) {
    res.status(INTERNAL_SERVER_ERROR).json({ message: error.message });
  }
});

module.exports = app;
