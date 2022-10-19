const myRemove = require('./my-remove');


// Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
describe('2 - Função "myRemove"', () => {
  it('testa se myRemove([1, 2, 3, 4], 3) retorna o valor experado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
});
