const fs = require('fs').promises;
const path = require('path');

async function readJSON(filePath) {
  try {
    const resolvedPath = path.resolve(__dirname, filePath);
    const response = await fs.readFile(resolvedPath);
    const data = JSON.parse(response);
    return data;
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { readJSON };
