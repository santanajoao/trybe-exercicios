const numberA = 6;
const numberB = 4;
const numberC = 2;

const aEven = numberA % 2 === 0;
const bEven = numberB % 2 === 0;
const cEven = numberC % 2 === 0;

if (aEven || bEven || cEven) {
  console.log(true);
} else {
  console.log(false);
}
