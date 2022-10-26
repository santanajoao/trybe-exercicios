const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

// Escreva uma função, que dado um array de pessoas e uma idade mínima, retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. Use every;
const verifyAges = (arr, minimumAge) => (
  arr.every((person) => person.age >= minimumAge)
);

console.log(verifyAges(people, 18));
