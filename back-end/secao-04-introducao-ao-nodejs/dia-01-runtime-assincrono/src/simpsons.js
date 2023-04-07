const { readJSON, writeJSON } = require('./utils/json');

const DATA_FILE_PATH = '../data/simpsons.json';

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
  writeJSON(DATA_FILE_PATH, jsonData);
}

module.exports = {
  printSimpsonsCharacters,
  getCharacterById,
  removeIdSixAndTen,
};
