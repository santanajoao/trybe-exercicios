const vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// Percorra essa variável, busque os números pares e os adicione a um
// novo array, que deverá ser retornado
function arrayOfNumbers(vector) {
  let evenNumbers = [];
  for (array of vector) {
    for (number of array) {
      if (number % 2 == 0) {
        evenNumbers.push(number);
      }
    }
  }
  return evenNumbers;
}

console.log(arrayOfNumbers(vector));
