const fs = require('fs').promises;
const nodePath = require('path');

const FILE_PATH = nodePath.resolve(__dirname, '../data/turism.json');

async function readTurismData() {
  const response = await fs.readFile(FILE_PATH);
  return JSON.parse(response);
}

async function checkTokenExistense(token) {
  const { users } = await readTurismData();
  const tokenExist = users.some((user) => user.token === token);
  return tokenExist;
}

async function addTurismActivity(activity) {
  const data = await readTurismData();
  data.activities.push(activity);

  await fs.writeFile(FILE_PATH, JSON.stringify(data));
}

module.exports = { readTurismData, checkTokenExistense, addTurismActivity };
