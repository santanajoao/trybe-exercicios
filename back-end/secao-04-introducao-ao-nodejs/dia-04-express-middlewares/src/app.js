const express = require('express');
const helmet = require('helmet');

require('express-async-errors');

const app = express();

app.use(helmet());
app.use(express.json());

module.exports = app;
