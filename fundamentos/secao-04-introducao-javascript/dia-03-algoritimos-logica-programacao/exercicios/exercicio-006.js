const n = 6;
const nMaiorZero = n > 0;
let linha = '';

if (nMaiorZero) {
  // esse loop cria a represtação de uma linha com n asteristicos
  for (let repeticao = 1; repeticao <= n; repeticao += 1) {
    linha += '*';
  }

  // esse loop imprime n vezes a linha criada anteriormente
  for (let repeticao = 1; repeticao <= n; repeticao += 1) {
    console.log(linha);
  }
} else {
  console.log('erro: n deve ser maior que zero')
}
