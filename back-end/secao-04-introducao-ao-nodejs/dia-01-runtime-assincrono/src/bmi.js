const readline = require('readline-sync');

const calculateBMI = (weight, height) => weight / (height * height);

const weightInKg = readline.questionFloat("What's your weight? ");
const heightInMeters = readline.questionFloat("What's you height? ");

const bmi = calculateBMI(weightInKg, heightInMeters);
console.log(`Your BMI is ${bmi}`);
