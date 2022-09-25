let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let arrayValueSum = 0;
let mediaAritimetica = null;
let greaterValue = null;
let lowerValue = null;
let numberOfOdd = 0;

for (number of numbers) {
  // percorra e imprima os valores da array
  console.log(number);

  // some todos os valores da array
  arrayValueSum += number;

  // descubra qual o maior valor do array
  if (greaterValue === null || number > greaterValue) {
    greaterValue = number;
  }

  // descubra qual o menor valor do array
  if (lowerValue === null || number < lowerValue) {
    lowerValue = number;
  }
  
  if (number % 2 !== 0) {
    numberOfOdd += 1;
  }
}

// imprima a soma de todos os valores da array
console.log('Soma dos elementos:', arrayValueSum);

// calcule e imprima a média aritimética
mediaAritimetica = arrayValueSum / numbers.length;
console.log('Média Aritimética:', mediaAritimetica);

// caso a media seja maior que vinte, imprima "valor maior que 20"
// caso não, imprima "valor menor ou igual a 20"
if (mediaAritimetica > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// imprima o maior valor do array
console.log('Maior valor:', greaterValue);

// descubra quantos valores ímpares existem no array. caso não exista, imprima
//"nenhum valor impar encontrado
if (numberOfOdd === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log('Número de valores ímpares:', numberOfOdd);
}

// imprima o menor valor do array
console.log('Menor valor:', lowerValue);