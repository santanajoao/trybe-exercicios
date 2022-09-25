const a = -2;
const b = 13;
const c = 28;

function maior(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  }
  return c;
}


console.log(maior(a, b, c));