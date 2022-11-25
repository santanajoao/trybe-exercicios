const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

const concatArrays = (array1, array2) => array1.concat(array2);

// Utilize o reduce para transformar uma matriz em um array.
const flatten = (array) => array.reduce(concatArrays, []);

console.table(flatten(arrays));
