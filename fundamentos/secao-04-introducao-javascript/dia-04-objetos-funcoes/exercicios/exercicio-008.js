// Crie uma função que receba um número N e retorne o somatório de 
// todos os números de 1 até N.

function somaAte(numero) {
  let soma = 0;
  for (let parcela = 1; parcela <= numero; parcela += 1) {
    soma += parcela;
  }
  return soma;
}

function somaAteV2(numero) {
  return numero * (numero + 1) / 2;
}
