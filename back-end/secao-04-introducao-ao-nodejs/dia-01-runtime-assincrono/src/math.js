function isNumber(value) {
  return typeof value === 'number';
}

function calculate(a, b, c) {
  if (!(isNumber(a) && isNumber(b) && isNumber(c))) {
    throw new TypeError('Informe apenas números');
  }

  const result = (a + b) * c;
  if (result < 50) {
    throw new Error('Valor muito baixo');
  }
  return result;
}
