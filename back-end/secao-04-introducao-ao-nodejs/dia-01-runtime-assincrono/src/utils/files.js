const fs = require('fs').promises;

async function readJSON(filePath) {
  const response = await fs.readFile(filePath);
  return JSON.parse(response);
}

async function writeFile(filePath, content) {
  fs.writeFile(filePath, content);
}

module.exports = { readJSON, writeFile };
