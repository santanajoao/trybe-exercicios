const express = require('express');
const validateFields = require('../middlewares/signupRouter/validateFields');
const generateToken = require('../utils/generateToken');

const signupRouter = express.Router();

signupRouter.post('/', validateFields, (req, res) => {
  const { email, senha, firstName, phone } = req.body;
  const token = generateToken();
  res.status(200).json({ token });
});

module.exports = signupRouter;
