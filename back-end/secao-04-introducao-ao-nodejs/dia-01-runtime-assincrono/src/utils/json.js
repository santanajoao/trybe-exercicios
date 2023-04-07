const fs = require('fs').promises;
const path = require('path');

async function readJSON(filePath) {
  const resolvedPath = path.resolve(__dirname, filePath);
  const response = await fs.readFile(resolvedPath);
  return JSON.parse(response);
}

module.exports = { readJSON };
