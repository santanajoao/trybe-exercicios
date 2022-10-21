const hydrate = (orderString) => {
  const allNumbers = orderString.match(/[0-9]/g);
  let total = 0;
  allNumbers.forEach((stringNumber) => {
    total += Number(stringNumber);
  });
  return total === 1 ? `1 copo de água` : `${total} copos de água`;
};

module.exports = hydrate;
