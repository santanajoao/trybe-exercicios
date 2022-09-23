let array = ['java', 'javascript', 'python', 'html', 'css'];

// Escreva um algoritmo que imprima a menor palavra de um array
let maiorPalavra = '';

for (palavra of array) {
  if (!maiorPalavra || palavra.length < maiorPalavra.length) {
    maiorPalavra = palavra;
  }
}

console.log(maiorPalavra);