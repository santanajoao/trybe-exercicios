const { readJSON } = require('./utils/json');

async function printSimpsonsCharacters() {
  const charactersList = await readJSON('../data/simpsons.json');
  charactersList.forEach(({ id, name }) => console.log(`${id} - ${name}`));
}

printSimpsonsCharacters();
