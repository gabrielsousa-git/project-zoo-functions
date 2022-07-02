const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((sp) => sp.name === animal).residents.every((sp) => sp.age >= age);
}

module.exports = getAnimalsOlderThan;
