const books = require('../books-data');
const authorWith3DotsOnName = require('../exercicios/exercicio-06');

describe('testa a função []', () => {
  it('testa se [] retorna o valor esperado', () => {
    const expectedResult = 'O Senhor dos Anéis';
    expect(authorWith3DotsOnName(books)).toEqual(expectedResult);
  });
});
