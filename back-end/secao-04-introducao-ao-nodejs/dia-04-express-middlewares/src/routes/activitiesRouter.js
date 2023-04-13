const express = require('express');

const router = express.Router();

const CREATED = 201;

router.post('/', (_, res) => {
  res.status(CREATED).json({ message: 'Atividade cadastrada com sucesso' });
});

module.exports = router;
