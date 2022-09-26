function maiorNome(nomes) {
  let maior = '';
  for (let nome of nomes) {
    if (nome.length > maior.length) {
      maior = nome;
    }
  }
  return maior;
}