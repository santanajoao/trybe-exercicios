const n = 7;

// indices da string que será impressa que deverão ser preenchidos por arteristicos
let posicao1 = Math.floor(n / 2);
let posicao2 = posicao1;

for (let linha = 1; linha <= n; linha += 2) {
  let stringLinha = '';

  
  for (let stringIndex = 0; stringIndex < n; stringIndex += 1) {

    if (stringIndex === posicao1 || stringIndex === posicao2 || linha === n) {
      // se o stringIndex for um dos indices que serão preenchidos com * é preenchido com *
      stringLinha += '*';
    } else {
      // senão é preenchido com espaço
      stringLinha += ' ';
    }
  }
  console.log(stringLinha)

  // posições preenchidas são alteradas
  posicao1 -= 1;
  posicao2 += 1;
}