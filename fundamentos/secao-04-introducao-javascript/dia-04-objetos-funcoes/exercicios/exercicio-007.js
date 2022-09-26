function maisRecorrente(numeros) {
  let recorrencia = {};
  let maisAparece;

  for (let numero of numeros) {
    if (recorrencia[numero]) {
      recorrencia[numero] += 1;
    } else {
      recorrencia[numero] = 1;
    }
  }

  for (let numero in recorrencia) {
    if (!maisAparece || recorrencia[numero] > recorrencia[maisAparece]) {
      maisAparece = numero;
    }
  }
  return maisAparece;
}
