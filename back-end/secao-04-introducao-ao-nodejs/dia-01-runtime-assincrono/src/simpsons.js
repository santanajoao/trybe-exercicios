const { readJSON } = require('./utils/json');

const DATA_FILE_PATH = '../data/simpsons.json';

async function printSimpsonsCharacters() {
  const charactersList = await readJSON(DATA_FILE_PATH);
  charactersList.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

async function getCharacterNameById(id) {
  const charactersList = await readJSON(DATA_FILE_PATH);
  const matchingCharacter = charactersList.find(
    (character) => Number(character.id) === id,
  );

  if (!matchingCharacter) {
    throw new Error('Id not found');
  }

  return matchingCharacter;
}

async function main() {
  printSimpsonsCharacters();
}

main();
