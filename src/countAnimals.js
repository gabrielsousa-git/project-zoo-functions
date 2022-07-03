const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const empty = {};
  if (!animal) {
    species.forEach((specie) => { empty[specie.name] = specie.residents.length; });
    return empty;
  }
  if (!animal.sex) {
    return species.find((specie) => specie.name === animal.specie).residents.length;
  }
  return species.find((specie) => specie.name === animal.specie).residents
    .filter((sp) => sp.sex === animal.sex).length;
}

module.exports = countAnimals;
