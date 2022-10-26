// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

const hasProperty = (object, keyName) => {
  if (object[keyName] === undefined) throw new Error('Informação indisponível');
}

const definedParameters = (parameters) => {
  parameters.forEach((parameter) => {
    if (parameter === undefined) {
      throw new Error('Nenhum parâmetro recebido');
    }
  });
};

const searchEmployee = (id, detail) => {
  try {
    definedParameters([id, detail]);
    for (const professional of professionalBoard) {
      if (professional.id === id) {
        hasProperty(professional, detail);
        return professional[detail];
      }
    }
    throw new Error('ID não identificada');
  } catch (error) {
    return error.message;
  }
};

module.exports = searchEmployee;
