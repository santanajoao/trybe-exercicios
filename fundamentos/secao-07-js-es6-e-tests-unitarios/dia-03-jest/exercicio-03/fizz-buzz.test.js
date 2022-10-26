const myFizzBuzz = require('./fizz-buzz');

describe('3 - Função "myFizzBuzz"', () => {
  // Faça uma chamada com um número divisível por 3 e 5 e verifique se
  // o retorno é o esperado
  it('testa se myFizzBuzz(15) retorna "fizzbuzz"', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  });
  // Faça uma chamada com um número divisível por 3 e verifique
  // se o retorno é o esperado
  it('testa se myFizzBuzz(6) retorna "fizz"', () => {
    expect(myFizzBuzz(6)).toBe('fizz');
  });
  // Faça uma chamada com um número divisível por 5 e verifique se
  // o retorno é o esperado
  it('testa se myFizzBuzz(10) retorna "buzz"', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  });
  // Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique
  // se o retorno é o esperado
  it('testa se myFizzBuzz(2) retorna 2', () => {
    expect(myFizzBuzz(2)).toBe(2);
  });
  // Faça uma chamada com um parâmetro que não é um número e verifique se o
  // retorno é o esperado
  it('testa se myFizzBuzz("texto") retorna false', () => {
    expect(myFizzBuzz('texto')).toBe(false);
  });
});
