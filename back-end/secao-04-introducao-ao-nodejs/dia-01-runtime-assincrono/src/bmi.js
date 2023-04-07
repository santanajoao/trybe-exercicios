const calculateBMI = (weight, height) => weight / (height * height);

const weightInKg = 70;
const heightInMeters = 1.75;

const bmi = calculateBMI(weightInKg, heightInMeters);
console.log(
  `O IMC de uma pessoa com ${weightInKg}kg e ${heightInMeters}m é ${bmi}`,
);
