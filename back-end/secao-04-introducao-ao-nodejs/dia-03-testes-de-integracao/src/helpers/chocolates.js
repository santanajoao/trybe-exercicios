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

module.exports = { getChocolates };
