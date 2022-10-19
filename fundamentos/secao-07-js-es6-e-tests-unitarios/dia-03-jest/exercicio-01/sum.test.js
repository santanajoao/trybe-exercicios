const sum = require('./sum');

describe('1 - Função "sum"', () => {
  // Teste se o retorno de sum(4, 5) é 9
  it('1.1 - sum(4, 5) deve retornar 9', () => {
    expect(sum(4, 5)).toBe(9);
  })

  // Teste se o retorno de sum(0, 0) é 0
  it('1.2 - sum(0, 0 deve retornar 0', () => {
    expect(sum(0, 0)).toBe(0);
  })

  // Teste se a função sum lança um erro quando os parâmetros são 4 e "5"

  // Teste se a mensagem de erro é “parameters must be numbers” quando realizar
  // a chamada sum(4, "5")
})
