const numberA = 2;
const numberB = 4;
const numberC = 1;

const aOdd = numberA % 2 !== 0;
const bOdd = numberB % 2 !== 0;
const cOdd = numberC % 2 !== 0;

if (aOdd || bOdd || cOdd) {
  console.log(true);
} else {
  console.log(false);
}
