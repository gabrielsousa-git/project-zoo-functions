const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.every((specie) => specie.name === animal && specie.residents.age >= age);
}

console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
