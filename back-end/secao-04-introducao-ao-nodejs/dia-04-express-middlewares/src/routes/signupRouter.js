const express = require('express');
const validateEmail = require('../middlewares/signupRouter/validateEmail');

const signupRouter = express.Router();

signupRouter.post('/', validateEmail, (req, res) => {
  const { email, senha, firstName, phone } = req.body;
});

module.exports = signupRouter;
