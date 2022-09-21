/* Utilize if/else para fazer um programa que retorne o maior de
três números. */
const numberA = 82;
const numberB = 23;
const numberC = 34;

if (numberA > numberB && numberA > numberC) {
  console.log(numberA);
} else if (numberB > numberA && numberB > numberC) {
  console.log(numberB);
} else {
  console.log(numberC);
}
