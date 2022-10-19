const myRemove = require('./my-remove');

describe('2 - Função "myRemove"', () => {
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
  it('testa se myRemove([1, 2, 3, 4], 3) retorna o valor experado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array
  // [1, 2, 3, 4]
  it('testa se myRemove([1, 2, 3, 4], 3) não retorna o mesmo array ', () => {
    expect([myRemove([1, 2, 3, 4], 3)]).not.toEqual([1, 2, 3, 4]);
  });
  // Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
  it('teste se myRemove([1, 2, 3, 4], 5) retorna o valor esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});
