function menorNumero(numeros) {
  let indexMenor;
  for (index in numeros) {
    if (!indexMenor || numeros[index] < numeros[indexMenor]) {
      indexMenor = index;
    }
  }
  return indexMenor;
}
