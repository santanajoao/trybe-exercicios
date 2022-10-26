const books = require('../books-data');
const oldBooksOrdered = require('../exercicios/exercicio-04');

describe('testa a função []', () => {
  it('testa se [] retorna o valor esperado', () => {
    const expectedResult = [
      {
        id: 6,
        name: 'O Chamado de Cthulhu',
        genre: 'Terror',
        author: { name: 'H. P. Lovecraft', birthYear: 1890 },
        releaseYear: 1928,
      },
      {
        id: 3,
        name: 'Fundação',
        genre: 'Ficção Científica',
        author: { name: 'Isaac Asimov', birthYear: 1920 },
        releaseYear: 1951,
      },
      {
        id: 2,
        name: 'O Senhor dos Anéis',
        genre: 'Fantasia',
        author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
        releaseYear: 1954,
      },
    ];
    expect(oldBooksOrdered(books)).toEqual(expectedResult);
  });
});
