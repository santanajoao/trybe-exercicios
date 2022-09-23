const n = 6;
const nMaiorZero = n > 0;
let linha = '';

if (nMaiorZero) {
  for (let repeticao = 1; repeticao <= n; repeticao += 1) {
    linha += '*';
  }

  for (let repeticao = 1; repeticao <= n; repeticao += 1) {
    console.log(linha);
  }
} else {
  console.log('erro: n deve ser maior que zero')
}
