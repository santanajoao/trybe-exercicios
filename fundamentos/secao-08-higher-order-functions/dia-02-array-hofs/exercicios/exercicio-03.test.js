const getNamedBook = require('./exercicio-03');

describe('testa a função getNamedBook', () => {
  it('testa se a função retorna o resultado esperado', () => {
    const expectedResult = {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
            name: 'George R. R. Martin',
        birthYear: 1948,
      },
        releaseYear: 1991,
    };
    expect(getNamedBook()).toEqual(expectedResult);
  });
});
