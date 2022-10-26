// Crie uma função que retorne um objeto no formato { nomeCompleto, email } representando uma nova pessoa contratada

// A sua função deve receber como parâmetro o nome completo da pessoa funcionária e, a partir dele, gerar automaticamente um email no formato
const generateEmail = (fullName) => {
  const email = `${fullName.toLowerCase().split(' ').join('_')}@trybe.com`;
  return { Nome: fullName, Email: email };
};

// Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respectivo id
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luisa Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
}

console.log(newEmployees(generateEmail));
