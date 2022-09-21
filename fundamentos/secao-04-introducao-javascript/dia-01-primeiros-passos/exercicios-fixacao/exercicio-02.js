let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// Utilize o operador typeof para imprimir qual o tipo das variáveis
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

// Experimente executar o comando console.log(typeof patientAge)
console.log(typeof patientAge);

// Experimente também trocar o valor de patientId = 50 para patientId = '50'
patientId = "50";
console.log(typeof patientId);

// -----------------------------------------------

// Crie uma constante chamada base e atribua a ela o valor 5.
const base = 5;
console.log(base);

// Crie uma constante uma chamada heigth e atribua a ela o valor 8.
const height = 8;
console.log(height);

/* Crie uma constante chamada area e atribua a ela o resultado da multiplicação
da base pela heigth */
const area = base * height;
console.log(area);

/* Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados
do retângulo. */
const perimeter = (base + height) * 2;
console.log(perimeter);
