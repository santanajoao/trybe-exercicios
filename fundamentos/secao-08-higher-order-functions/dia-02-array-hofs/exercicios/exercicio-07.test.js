const authorUnique = require('./exercicio-07');

describe('testa a função authorUnique', () => {
  it('testa se a função retorna o valor esperado', () => {
    const expectResult = false;
    expect(authorUnique()).toBe(expectResult);
  });
});
