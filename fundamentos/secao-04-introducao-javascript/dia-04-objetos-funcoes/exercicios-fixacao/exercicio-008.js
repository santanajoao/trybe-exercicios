const angulo1 = 40;
const angulo2 = 60;
const angulo3 = 80;

function trianguloValido(angulo1, angulo2, angulo3) {
  const somaAngulos = angulo1 + angulo2 + angulo3;
  if (angulo1 < 0 || angulo2 < 0 || angulo3 < 0 || somaAngulos !== 180) {
    return false;
  }
  return true;
}

console.log(trianguloValido(angulo1, angulo2, angulo3));