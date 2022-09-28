// Escreva um algoritmo que retorne o maior número primo entre 2 e 50
const inicioIntervalo = 2;
const fimIntervalo = 50;
let maiorPrimo = null;

for (let numero = fimIntervalo-1; numero > inicioIntervalo; numero -= 1) {
  // inicia do 2 pois todos os números entre 2 e 50 tem 2 divisores triviais (1 e ele mesmo)
  let numeroDivisores = 2;
  let raiz = Math.floor(numero ** (1 / 2)) + 1;

  // inicia do 2 pois 1 é divisor de todo número
  // termina na raiz pois é o maior divisor que pode existir além do próprio número
  for (let divisor = 2; divisor <= raiz; divisor += 1) {
    if (numero % divisor === 0) {
      numeroDivisores += 1;
      break;
    }
  }
  
  if (numeroDivisores === 2) {
    maiorPrimo = numero;
    break;
  }
}
console.log('o maior primo entre', inicioIntervalo, 'e', fimIntervalo, 'é', maiorPrimo);
