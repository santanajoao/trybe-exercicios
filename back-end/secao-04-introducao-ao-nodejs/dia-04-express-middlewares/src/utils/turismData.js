const fs = require('fs').promises;
const nodePath = require('path');
const generateToken = require('./generateToken');

const FILE_PATH = nodePath.resolve(__dirname, '../data/turism.json');

async function readTurismData() {
  const response = await fs.readFile(FILE_PATH);
  return JSON.parse(response);
}

async function writeTurismData(data) {
  await fs.writeFile(FILE_PATH, data);
}

function jsonfy(data) {
  const IDENT = 2;
  return JSON.stringify(data, null, IDENT);
}

async function checkTokenExistense(token) {
  const { users } = await readTurismData();
  const tokenExist = users.some((user) => user.token === token);
  return tokenExist;
}

async function addTurismActivity(activity) {
  const data = await readTurismData();
  data.activities.push(activity);

  await writeTurismData(jsonfy(data));
}

async function registerUser(user) {
  const data = await readTurismData();
  const token = generateToken();
  const newUser = { ...user, token };
  data.users.push(newUser);

  await writeTurismData(jsonfy(data));

  return token;
}

module.exports = {
  readTurismData,
  checkTokenExistense,
  addTurismActivity,
  registerUser,
};
