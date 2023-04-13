function isNullish(value) {
  const nullish = [null, undefined];
  return nullish.includes(value);
}

module.exports = isNullish;
