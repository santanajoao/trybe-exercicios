function menorNumero(numeros) {
  let indexMenor;
  for (let index in numeros) {
    if (!indexMenor || numeros[index] < numeros[indexMenor]) {
      indexMenor = index;
    }
  }
  return indexMenor;
}
