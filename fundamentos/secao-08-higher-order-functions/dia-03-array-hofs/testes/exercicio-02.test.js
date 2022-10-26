const books = require('../books-data');
const nameAngAge = require('../exercicios/exercicio-02');

describe('testa a função nameAngAge', () => {
  it('testa se nameAngAge retorna o valor esperado', () => {
    const expectedResult = [
      {
        age: 31,
        author: 'Isaac Asimov',
      },
      {
        age: 38,
        author: 'H. P. Lovecraft',
      },
      {
        age: 39,
        author: 'Stephen King',
      },
      {
        age: 43,
        author: 'George R. R. Martin',
      },
      {
        age: 45,
        author: 'Frank Herbert',
      },
      {
        age: 62,
        author: 'J. R. R. Tolkien',
      },
    ];
    expect(nameAngAge(books)).toEqual(expectedResult);
  });
});
