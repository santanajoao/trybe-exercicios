const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve
// possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que
// deverá ser adicionada e o valor dela.
const addProperty = (object, key, value) => {
  object[key] = value;
};

// Crie uma função para listar as keys de um objeto.
const listKeys = (object) => Object.keys(object);

// Crie uma função para mostrar o tamanho de um objeto.
const objectLength = (object) => Object.keys(object).length;

// Crie uma função para listar os valores de um objeto.
const listValues = (object) => Object.values(object);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Usando o objeto criado no tópico anterior, crie uma função que retorne o
// número total de estudantes em todas as aulas.
const allStudents = (object) => {
  let sum = 0;
  Object.values(object).forEach((value) => {
    sum += value.numeroEstudantes;
  });
  return sum;
};

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no
// objeto.
const getPositionValue = (object, position) => Object.values(object)[position];

// Crie uma função que verifique se o par (chave / valor) existe na função.
// Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da
// chave e o valor da chave. Exemplo:
const verifyPair = (object, key, value) => {
  return Object.keys(object).includes(key) && object[key] === value;
};
