const express = require('express');
const routers = require('./routers');

const app = express();

app.use(express.json());
app.use('/books', routers.BookRouter);

app.get('/status', (_req, res) => {
  res.status(200).send('It\'s all alright!');
});

module.exports = app;
