function maiorNumero(numeros) {
  let maior;
  for (index in numeros) {
    if (!maior || numeros[index] > maior) {
      maior = numeros[index];
    } 
  }
  return maior;
}
