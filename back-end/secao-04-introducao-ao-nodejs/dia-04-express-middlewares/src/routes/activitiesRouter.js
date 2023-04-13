const express = require('express');
const validateName = require('../middlewares/activities/validateName');

const router = express.Router();

const CREATED = 201;

router.post('/', validateName, (_, res) => {
  res.status(CREATED).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = router;
