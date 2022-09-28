const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

// Retorne um objeto que contenha o nome da fruta como chave e a quantidade de 
// vezes que ela aparece no array como valor

let quantidade = {};
let stringImpressa = 'Sua cesta possui: ';

function recorrencia(lista) {
  let frutaRecorrencia = {};
  for (valor of lista) {
    if (!frutaRecorrencia[valor]) {
      frutaRecorrencia[valor] = 1;
    } else {
      frutaRecorrencia[valor] += 1;
    }
  }
  return frutaRecorrencia;
}

// Imprima esse resultado na tela com uma mensagem no seguinte formato:
// Sua cesta possui: x Melancias, x Abacates
quantidade = recorrencia(basket);
for (fruta in quantidade) {
  if (stringImpressa !== 'Sua cesta possui: ') {
    stringImpressa += ', ';
  }
  stringImpressa += ( + quantidade[fruta] + ' ' + fruta + 's');
}

console.log(stringImpressa);