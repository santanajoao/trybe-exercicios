const n = 5;

for (let linhaImpressa = 1; linhaImpressa <= n; linhaImpressa += 1) {
  let linha = '';
  for (let caractereLinha = 1; caractereLinha <= n; caractereLinha += 1) {
    if (caractereLinha <= n - linhaImpressa) {
      linha += ' ';
    } else {
      linha += '*';
    }
  }
  console.log(linha);
}