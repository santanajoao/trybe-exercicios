function maiorNumero(numeros) {
  let indexMaior;
  for (let index in numeros) {
    if (!indexMaior || numeros[index] > numeros[indexMaior]) {
      indexMaior = index;
    } 
  }
  return indexMaior;
}
