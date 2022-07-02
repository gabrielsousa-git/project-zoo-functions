const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const empty = {};
  if (!animal) {
    species.forEach((specie) => { empty[specie.name] = specie.residents.length; });
    return empty;
  }
  const count = {};
  if (species.name === animal) {
    species.forEach((specie) => { count[specie.name] = specie.residents.length; });
    return count;
  }
}
console.log(countAnimals('lions'));
module.exports = countAnimals;
