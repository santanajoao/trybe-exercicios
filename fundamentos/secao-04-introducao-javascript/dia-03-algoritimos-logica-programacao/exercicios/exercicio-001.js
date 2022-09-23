const fatorialDe = 10;

// Escreva um algoritmo que imprima o fatorial de um número
const numeroPositivo = fatorialDe >= 0;
let resultadoFatorial = 1;

if (numeroPositivo) {
  for (let fator = 1; fator <= fatorialDe; fator += 1) {
    resultadoFatorial *= fator;
  }
  console.log(resultadoFatorial);
} else {
  console.log('erro: não existe fatorial para números negativos')
}
