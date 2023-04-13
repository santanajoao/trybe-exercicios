const express = require('express');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const validateDescription = require('../middlewares/validateDescription');
const validateCreatedAt = require('../middlewares/validateCreatedAt');

const router = express.Router();

const CREATED = 201;

router.post(
  '/',
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  (_, res) => {
    res.status(CREATED).json({ message: 'Atividade cadastrada com sucesso' });
  },
);

module.exports = router;
