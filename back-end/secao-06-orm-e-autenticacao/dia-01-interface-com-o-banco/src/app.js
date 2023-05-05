const express = require('express');
require('express-async-errors');
const routers = require('./routers');
const { error } = require('./middlewares');

const app = express();

app.use(express.json());

app.use('/books', routers.BookRouter);

app.get('/status', (_req, res) => {
  res.status(200).send('It\'s all alright!');
});

app.use(error);

module.exports = app;
