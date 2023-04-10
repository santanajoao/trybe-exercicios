const express = require('express');

const app = express();

app.get('/', (_, res) => res.status(200).json({ message: 'all ok' }));

module.exports = app;
