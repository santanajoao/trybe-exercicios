const n = 5;

for (let linhaAtual = 1; linhaAtual <= n; linhaAtual += 1) {
  let representacaoLinha = '';

  for (let indiceCaractere = 0; indiceCaractere < n; indiceCaractere += 1) {
    if (indiceCaractere < n-linhaAtual) {
      representacaoLinha += ' ';
    } else {
      representacaoLinha += '*';
    }
  }
  console.log(representacaoLinha);
}
