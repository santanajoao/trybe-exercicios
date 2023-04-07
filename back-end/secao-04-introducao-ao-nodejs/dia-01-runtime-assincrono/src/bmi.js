const { questionFloatWithComma } = require('./utils/userCLInput');

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function getBMISituation(bmi) {
  if (bmi < 18.5) return 'Abaixo do peso (magreza)';

  if (bmi < 24.9) return 'Peso normal';

  if (bmi < 29.9) return 'Acima do peso (sobrepeso)';

  if (bmi < 34.9) return 'Obesidade grau I';

  if (bmi < 39.9) return 'Obesidade grau II';

  return 'Obesidade graus III e IV';
}

function main() {
  const weightInKg = questionFloatWithComma("What's your weight? ");
  const heightInMeters = questionFloatWithComma("What's you height? ");

  const bmi = calculateBMI(weightInKg, heightInMeters);
  const bmiSituation = getBMISituation(bmi);

  console.log(`\nSeu IMC é ${bmi.toFixed(2)}`);
  console.log(`Situação: ${bmiSituation}`);
}

main();
