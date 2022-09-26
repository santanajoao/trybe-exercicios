// Crie uma função que receba um array de inteiros e retorne o índice do
// maior valor
function maiorNumero(numeros) {
  let indexMaior;
  for (let index in numeros) {
    if (!indexMaior || numeros[index] > numeros[indexMaior]) {
      indexMaior = index;
    } 
  }
  return indexMaior;
}
