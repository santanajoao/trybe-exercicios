function maiorNumero(numeros) {
  let indexMaior;
  for (index in numeros) {
    if (!indexMaior || numeros[index] > numeros[indexMaior]) {
      indexMaior = index;
    } 
  }
  return indexMaior;
}
