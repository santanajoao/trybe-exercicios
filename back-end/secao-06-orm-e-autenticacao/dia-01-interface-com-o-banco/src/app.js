const express = require('express');

const app = express();

app.get('/status', (_req, res) => {
  res.status(200).send('It\'s all alright!');
});

module.exports = app;
