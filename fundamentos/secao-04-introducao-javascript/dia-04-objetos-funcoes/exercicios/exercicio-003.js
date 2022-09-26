// Crie uma função que receba uma string e indique se é ou não palíndromo
function palindromo(string) {
  const comprimento = string.length;
  const indiceMeio = Math.floor(comprimento / 2);
  for (let index = 0; index <= indiceMeio; index += 1) {
    if (string[index] !== string[comprimento - index - 1]) {
      return false;
    }
  }
  return true;
}
