const { encode, decode } = require('./encode-decode');

const itsFunction = (message, object) => {
  it(message, () => expect(typeof object).toBe('function'));
};

describe('1 - Function "encode"', () => {
  // Teste se encode e decode são funções;
  itsFunction('encode é uma função', encode);
  // Para a função encode, teste se as vogais a, e, i, o, u são convertidas em
  // 1, 2, 3, 4 e 5, respectivamente
  it('as vogais são convertidas em 1, 2, 3, 4, 5', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  // Teste se as demais letras/números não são convertidos para cada caso
  it('letras que não são vogais não são convertidas', () => {
    const notVowels = 'bcdfghjklmnpqrstvwxyz';
    expect(encode(notVowels)).toBe(notVowels);
  });
  // Teste se a string que é retornada pelas funções tem o mesmo número de
  // caracteres que a string passada como parâmetro.
  it('o retorno deve ter o mesmo tamanho do parâmetro', () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    expect(encode(alphabet)).toHaveLength(alphabet.length);
  });
});

describe('2 - Function "decode"', () => {
  // Teste se encode e decode são funções;
  itsFunction('decode é uma função', decode);
  // Para a função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos
  // nas vogais a, e, i, o, u, respectivamente;
  it('números 1, 2, 3 ,4, 5 são convertidos em vogais', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  // Teste se as demais letras/números não são convertidos para cada caso
  it('números fora do intervalo de 1 a 5 não são convertidos', () => {
    const excludedNumbers = '67890';
    expect(decode(excludedNumbers)).toBe(excludedNumbers);
  });
  // Teste se a string que é retornada pelas funções tem o mesmo número de
  // caracteres que a string passada como parâmetro.
  it('o retorno deve ter o mesmo tamanho do parâmetro', () => {
    const numbers = '0123456789';
    expect(decode(numbers)).toHaveLength(numbers.length);
  });
});
