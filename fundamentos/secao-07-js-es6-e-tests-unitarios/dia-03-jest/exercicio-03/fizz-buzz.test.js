const myFizzBuzz = require('./fizz-buzz');

describe('3 - Função "myFizzBuzz"', () => {
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se
  // o retorno é o esperado
  it('teste se myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
});