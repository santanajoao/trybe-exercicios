const books = require('../books-data');
const formatedBookNames = require('../exercicios/exercicio-01');

describe('testa a função formatedBookNames', () => {
  it('testa se formatedBookNames retorna o valor esperado', () => {
    const expectedResult = [
      'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
      'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
      'Fundação - Ficção Científica - Isaac Asimov',
      'Duna - Ficção Científica - Frank Herbert',
      'A Coisa - Terror - Stephen King',
      'O Chamado de Cthulhu - Terror - H. P. Lovecraft',
    ];
    expect(formatedBookNames(books)).toEqual(expectedResult);
  });
});
