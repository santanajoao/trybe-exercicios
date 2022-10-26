// Crie uma função que receba uma frase e retorne a maior palavra.
const longestWord = (phrase) => {
  let longestWord = '';
  const allWords = phrase.split(' ');
  for (let index = 0; index < allWords.length; index += 1) {
    if (allWords[index].length >= longestWord.length) {
      longestWord = allWords[index];
    }
  }
  return longestWord;
}

// tente fazer o mesmo exercício utilizando o método array.sort().
const longestWord2 = phrase => {
  return phrase.split(' ').sort((a, b) => b.length - a.length)[0];
}

const phrase = 'Antônio foi ao banheiro e não sabemos o que aconteceu'
console.log(longestWord(phrase));
console.log(longestWord2(phrase));
