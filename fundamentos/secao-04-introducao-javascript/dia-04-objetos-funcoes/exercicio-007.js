function sinal(numero) {
  if (numero > 0) {
    return 'positivo';
  } else if (numero < 0) {
    return 'negativo';
  }
  return 'zero';
}

console.log(sinal(-2));