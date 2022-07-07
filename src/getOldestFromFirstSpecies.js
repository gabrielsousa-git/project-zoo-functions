const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = employees.find((employee) => employee.id === id).responsibleFor.find((sp) => sp);
  const animal = species.find((specie) => specie.id === person).residents;
  return Object.values(animal.sort(({ age: ageA }, { age: ageB }) => ageB - ageA)[0]);
}

module.exports = getOldestFromFirstSpecies;
