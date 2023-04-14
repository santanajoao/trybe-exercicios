const express = require('express');
const validateFields = require('../middlewares/signupRouter/validateFields');
const { registerUser } = require('../utils/turismData');

const signupRouter = express.Router();

signupRouter.post('/', validateFields, async (req, res) => {
  const user = req.body;
  const token = await registerUser(user);
  res.status(200).json({ token });
});

module.exports = signupRouter;
