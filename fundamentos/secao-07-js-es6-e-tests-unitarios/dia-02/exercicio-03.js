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

const addProperty = (object, key, value) => {
  object[key] = value;
};

const listKeys = (object) => Object.keys(object);

const objectLength = (object) => Object.keys(object).length;

const listValues = (object) => Object.values(object);

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

const allStudents = (object) => {
  let sum = 0;
  Object.values(object).forEach((value) => {
    sum += value.numeroEstudantes;
  });
  return sum;
};

const getPositionValue = (object, position) => Object.values(object)[position];

const verifyPair = (object, key, value) => {
  return Object.keys(object).includes(key) && object[key] === value;
};
