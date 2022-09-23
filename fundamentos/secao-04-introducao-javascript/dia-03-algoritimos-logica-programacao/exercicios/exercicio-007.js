const n = 5;
const nMaiorZero = n > 0;
let linha = '';

if (nMaiorZero) {
  for (let repeticao = 1; repeticao <= n; repeticao += 1) {
    linha += '*';
    console.log(linha);
  }
} else {
  console.log('erro: n deve ser maior que zero')
}
