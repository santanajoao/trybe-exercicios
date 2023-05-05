const express = require('express');
const { BookController } = require('../controllers');

const router = express.Router();

router.get('/', BookController.handleGetAllBooks);

module.exports = router;
