const n = 5;

for (let numeroCaracteres = 1; numeroCaracteres <= n; numeroCaracteres += 2) {
  let representacaoLinha = '';
  let numeroEspacos = (n - numeroCaracteres) / 2;

  for (let indiceCaractere = 0; indiceCaractere < numeroEspacos + numeroCaracteres; indiceCaractere += 1) {
    if (indiceCaractere < numeroEspacos) {
      representacaoLinha += ' ';
    } else {
      representacaoLinha += '*';
    }
  }
  console.log(representacaoLinha);
}
