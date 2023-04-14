const express = require('express');
const helmet = require('helmet');
require('express-async-errors');
const activitiesRouter = require('./routes/activitiesRouter');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/activities', activitiesRouter);

app.use(errorHandler);

module.exports = app;
