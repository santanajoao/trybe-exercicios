// Crie uma função que receba um array de inteiros e retorne o índice do
// menor valor

function menorNumero(numeros) {
  let indexMenor;
  for (let index in numeros) {
    if (!indexMenor || numeros[index] < numeros[indexMenor]) {
      indexMenor = index;
    }
  }
  return indexMenor;
}
