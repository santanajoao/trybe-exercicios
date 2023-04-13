const express = require('express');
const helmet = require('helmet');
require('express-async-errors');
const activitiesRouter = require('./routes/activitiesRouter');

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/activities', activitiesRouter);

module.exports = app;
