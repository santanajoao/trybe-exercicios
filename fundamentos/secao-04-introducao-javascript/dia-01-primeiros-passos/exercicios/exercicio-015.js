const salario = 3000;
let rendaTax = 0;
let rendaParcel = 0;
let salarioBase = null;
let salarioLiquido = null;
let inssTax = null;

if (salario > 5189.82) {
  inssTax = 570.88;
} else if (salario >= 2594.93 && salario <= 5189.82) {
  inssTax = 0.11 * salario;
} else if (salario >= 1556.95 && salario <= 2594.92) {
  inssTax = 0.09 * salario;
} else if (salario <= 1556.94) {
  inssTax = 0.08 * salario;
}

salarioBase = salario - inssTax;

if (salarioBase >= 4664.68) {
  rendaTax = 0.275;
  rendaParcel = 869.36;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  rendaTax = 0.225;
  rendaParcel = 636.13;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  rendaTax = 0.15;
  rendaParcel = 354.8;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  rendaTax = 0.075;
  rendaParcel = 142.8;
}

salarioLiquido = salarioBase - (salarioBase * rendaTax - rendaParcel);

console.log(salarioLiquido);
