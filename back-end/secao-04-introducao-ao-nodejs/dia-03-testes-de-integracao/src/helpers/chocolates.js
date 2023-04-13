const fs = require('fs').promises;
const path = require('path');

const DATA_PATH = path.resolve(__dirname, '../data/chocolates.json');

async function readChocolatesData() {
  const response = await fs.readFile(DATA_PATH);
  const data = JSON.parse(response);
  return data;
}

async function getChocolates() {
  const { chocolates } = await readChocolatesData();
  return chocolates;
}

async function getChocolateById(id) {
  const chocolates = await getChocolates();
  const requestedChocolate = chocolates.find(
    (chocolate) => chocolate.id === id,
  );
  return requestedChocolate;
}

async function getChocolatesByBrandId(id) {
  const chocolates = await getChocolates();
  const brandChocolates = chocolates.filter(
    (chocolate) => chocolate.brandId === id,
  );
  return brandChocolates;
}

async function searchChocolatesByName(name = '') {
  const lowerCaseQuerie = name.toLowerCase();
  const chocolates = await getChocolates();
  const searchResult = chocolates.filter((chocolate) =>
    chocolate.name.toLowerCase().includes(lowerCaseQuerie),
  );
  return searchResult;
}

module.exports = {
  getChocolates,
  getChocolateById,
  getChocolatesByBrandId,
  searchChocolatesByName,
};
