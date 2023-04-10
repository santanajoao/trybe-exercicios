const fs = require('fs').promises;

async function readJSON(path) {
  const response = await fs.readFile(path);
  return JSON.parse(response);
}

module.exports = { readJSON };
