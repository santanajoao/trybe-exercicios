const substituaX = (nome) => {
  const frase = 'Tryber x aqui!';
  return frase.replace('x', nome);
}

const minhasSkills = (whoIs) => {
  const skills = ['HTML', 'CSS', 'JavaScript'];
  let resultado = `${whoIs}\nMinhas três principais habilidades são:`;
  skills.forEach((skill) => resultado = `${resultado}\n- ${skill}`);
  return resultado;
}

const personName = 'João';
console.log(minhasSkills(substituaX(personName)));

