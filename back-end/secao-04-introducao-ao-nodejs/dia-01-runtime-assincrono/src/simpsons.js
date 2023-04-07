const path = require('path');
const { readJSON, writeFile } = require('./utils/files');

const DATA_FILE_PATH = path.resolve(__dirname, './data/simpsons.json');

async function printSimpsonsCharacters() {
  const charactersList = await readJSON(DATA_FILE_PATH);
  charactersList.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

async function getCharacterById(id) {
  const charactersList = await readJSON(DATA_FILE_PATH);
  const matchingCharacter = charactersList.find(
    (character) => Number(character.id) === id,
  );

  if (!matchingCharacter) {
    throw new Error('Id not found');
  }

  return matchingCharacter;
}

async function removeIdSixAndTen() {
  const charactersList = await readJSON(DATA_FILE_PATH);

  const idsToRemove = [6, 10];
  const listWithoutTargets = charactersList.reduce((result, character) => {
    const characterId = Number(character.id);
    if (idsToRemove.includes(characterId)) {
      return result;
    }
    return [...result, character];
  }, []);

  const jsonData = JSON.stringify(listWithoutTargets, null, 2);
  writeFile(DATA_FILE_PATH, jsonData);
}

async function createSimpsonFamilyJSONFile() {
  const charactersList = await readJSON(DATA_FILE_PATH);
  const familyCharacters = charactersList.slice(0, 4);
  const jsonData = JSON.stringify(familyCharacters, null, 2);

  const newFilePath = path.resolve(__dirname, './data/simpsonFamily.json');
  writeFile(newFilePath, jsonData);
}

module.exports = {
  printSimpsonsCharacters,
  getCharacterById,
  removeIdSixAndTen,
  createSimpsonFamilyJSONFile,
};
