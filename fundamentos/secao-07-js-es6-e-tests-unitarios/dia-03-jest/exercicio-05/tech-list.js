const cloneArray = (array) => {
  const clone = [];
  array.forEach((value) => {
    clone.push(value);
  });
  return clone;
};

const techList = (techArray, name) => {
  if (techArray.length === 0) return 'Vazio!';

  const techArrayClone = cloneArray(techArray).sort();
  const allObjects = [];
  techArrayClone.forEach((techString) => {
    allObjects.push({ tech: techString, name: name });
  });
  return allObjects;
};

module.exports = techList;
