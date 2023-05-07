const {
  sequelize,
  dataTypes,
  checkModelName,
  checkPropertyExists,
} = require('sequelize-test-helpers');

const BookModel = require('../../../src/models/book.model');

describe('Book Model', function () {
  const Book = BookModel(sequelize, dataTypes);
  const book = new Book();

  describe('Deve possuir o nome correto', function () {
    checkModelName(Book)('Book');
  });

  describe('Deve possuir as colunas corretas', function () {
    const properties = [
      'title', 'author', 'pageQuantity', 'publisher', 'createdAt', 'updatedAt',
    ];
    properties.forEach(checkPropertyExists(book));
  });
});
