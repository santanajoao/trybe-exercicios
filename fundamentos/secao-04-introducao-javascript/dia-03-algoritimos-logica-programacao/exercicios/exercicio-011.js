const numeroChecado = 0;
const numeroPositivo = numeroChecado >= 0;
let numeroDivisores = 0;

// apenas para números positivos
if (numeroPositivo) {

  // checa se o número é divisível por todos os números no intervalo de 0 até o próprio número  
  for (let divisor = 1; divisor <= numeroChecado; divisor += 1) {
    if (numeroChecado % divisor === 0) {
      numeroDivisores += 1;
    }
  }

  // se o total de divisores for igual a 2, é primo
  if (numeroDivisores === 2) {
    console.log(numeroChecado, 'é primo');
  } else {
    console.log(numeroChecado, 'não é primo')
  }

} else {
  console.log('erro: o número deve ser positivo')
}


 
