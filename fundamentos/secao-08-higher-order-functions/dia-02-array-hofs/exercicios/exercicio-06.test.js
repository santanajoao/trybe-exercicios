const someBookWasReleaseOnThe80s = require('./exercicio-06');

describe('testa a função someBookWasReleaseOnThe80s', () => {
  it('testa se a função retorna o valor esperado', () => {
    const expectedResult = true;
    expect(someBookWasReleaseOnThe80s()).toBe(expectedResult);
  })
});
