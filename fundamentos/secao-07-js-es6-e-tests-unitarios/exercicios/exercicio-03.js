// Crie uma arrow function factorial que recebe um número como parâmetro
const factorial = (number) => {
  let result = 1;
  for (let fator = number; fator > 1; fator -= 1) {
    result *= fator;
  }
  return result;
}
const recursiveFact = (num) => num > 1 ? num * recursiveFact(num - 1) : num;
const number = 5;

//Imprima “Esse é o fat´orial resultado da função“ com template literals
console.log(`Esse é o fatorial ${factorial(number)}`)

// tente fazer o mesmo exercício de forma recursiva.
console.log(`Esse é o resultado recursivo ${recursiveFact(number)}`);
