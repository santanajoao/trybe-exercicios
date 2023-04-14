const express = require('express');
const helmet = require('helmet');

require('express-async-errors');

const errorHandler = require('./middlewares/errorHandler');
const activitiesRouter = require('./routes/activitiesRouter');
const signupRouter = require('./routes/signupRouter');

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/activities', activitiesRouter);
app.use('/signup', signupRouter);
app.use(errorHandler);

module.exports = app;
