const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const expectedResult = 20;

const countA = (string) =>
  string.split('').filter((caractere) => ['a', 'A'].includes(caractere)).length;

// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
const containsA = (namesArray) =>
  namesArray.reduce((counter, name) => counter + countA(name), 0);

console.log(containsA(names));
