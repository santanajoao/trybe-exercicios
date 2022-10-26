const books = require('../books-data');
const fantasyOrScienceFictionAuthors = require('../exercicios/exercicio-05');

describe('testa a função []', () => {
  it('testa se [] retorna o valor esperado', () => {
    const expectedResult = [
      'Frank Herbert',
      'George R. R. Martin',
      'Isaac Asimov',
      'J. R. R. Tolkien',
    ];
    expect(fantasyOrScienceFictionAuthors(books)).toEqual(expectedResult);
  });
});
