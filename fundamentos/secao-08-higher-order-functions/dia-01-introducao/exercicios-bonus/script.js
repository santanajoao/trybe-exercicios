const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dragonDamage = () => {
  const dragonMinimumDamage = 15;
  return randomNumber(dragonMinimumDamage, dragon.strength);
};

const warriorDamage = () => {
  const warriorMaximumDamage = warrior.strength * warrior.weaponDmg;
  return randomNumber(warrior.strength, warriorMaximumDamage);
}

const mageDamageMana = () => {
  let mageDamage = 0;
  let manaSpent = 0;
  if (mage.mana < 15) {
    mageDamage = 'Não possui mana suficiente';
  } else {
    mageDamage = randomNumber(mage.intelligence, mage.intelligence * 2);
    manaSpent = 15;
  }
  return { damage: mageDamage, mana: manaSpent };
};

const turnWarrior = (callback) => {
  warrior.damage = callback();
  dragon.healthPoints -= warrior.damage;
};

const turnMage = (callback) => {
  const mageDamageMana = callback();
  const damage = mageDamageMana.damage;
  mage.damage = typeof damage === 'number' ? damage : 0;
  mage.mana -= mageDamageMana.mana;
  dragon.healthPoints -= mage.damage;
};

const turnDragon = (callback) => {
  dragon.damage = callback();
  warrior.healthPoints -= dragon.damage;
  mage.healthPoints -= dragon.damage;
};

const gameActions = {
  warriorTurn: turnWarrior,
  mageTurn: turnMage,
  dragonTurn: turnDragon,
  showResults: () => battleMembers,
};

gameActions.warriorTurn(warriorDamage);
gameActions.mageTurn(mageDamageMana);
gameActions.dragonTurn(dragonDamage);
console.log(gameActions.showResults());
