const express = require('express');
const { BookController } = require('../controllers');
const { BookMiddleware } = require('../middlewares');

const router = express.Router();

router.get('/', BookController.handleGetAllBooks);

router.get('/:id', BookController.handleGetBookById);

router.post('/', BookMiddleware.checkForBook, BookController.handlePostBook);

router.put('/:id', BookMiddleware.checkForBook, BookController.handlePutBook);

module.exports = router;
