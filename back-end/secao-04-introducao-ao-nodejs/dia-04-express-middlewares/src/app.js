const express = require('express');
const helmet = require('helmet');
require('express-async-errors');
const activitiesRouter = require('./routes/activitiesRouter');

const app = express();

app.use(helmet());
app.use(express.json());

app.use('/activities', activitiesRouter);

const BAD_REQUEST = 500;
app.use((err, _req, res, _next) => {
  const { status = BAD_REQUEST, message } = err;

  if (status === BAD_REQUEST) {
    console.error(message);
    return res.status(BAD_REQUEST).json({
      message: `Sorry! Some internal error ocurred: ${message}`,
    });
  }
  res.status(status).json({ message });
});

module.exports = app;
