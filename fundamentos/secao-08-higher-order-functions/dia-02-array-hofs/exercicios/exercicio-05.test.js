const { default: expect } = require('expect');
const everyoneWasBornOnSecXX = require('./exercicio-05');

describe('testa a função everyoneWasBornOnSecXX', () => {
  it('testa se a função retorna o valor esperado', () => {
    const expectedResult = false;
    expect(everyoneWasBornOnSecXX()).toEqual(expectedResult);
  });
});
