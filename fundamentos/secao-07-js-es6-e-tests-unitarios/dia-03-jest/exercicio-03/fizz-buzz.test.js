const myFizzBuzz = require('./fizz-buzz');

describe('3 - Função "myFizzBuzz"', () => {
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se
  // o retorno é o esperado
  it('teste se myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // Faça uma chamada com um número divisível por 3 e verifique
  // se o retorno é o esperado
  it('teste se myFizzBuzz(6) retorna "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  // Faça uma chamada com um número divisível por 5 e verifique se
  // o retorno é o esperado
  it('teste se myFizzBuzz(10) retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
});