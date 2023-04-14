const express = require('express');

const validateName = require('../middlewares/activitiesRouter/validateName');
const validatePrice = require('../middlewares/activitiesRouter/validatePrice');
const validateDescription = require('../middlewares/activitiesRouter/validateDescription');
const validateCreatedAt = require('../middlewares/activitiesRouter/validateCreatedAt');
const validateRating = require('../middlewares/activitiesRouter/validateRating');
const validateDifficulty = require('../middlewares/activitiesRouter/validateDifficulty');
const validateAuth = require('../middlewares/activitiesRouter/validateAuth');

const { addTurismActivity } = require('../utils/turismData');

const router = express.Router();

const CREATED = 201;

router.post(
  '/',
  validateAuth,
  validateName,
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  async (req, res) => {
    const activity = req.body;
    await addTurismActivity(activity);
    res.status(CREATED).json({ message: 'Atividade cadastrada com sucesso' });
  },
);

module.exports = router;
