const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return species.filter((animal, index) => animal.id === ids[0] || animal.id === ids[index]);
}

module.exports = getSpeciesByIds;
