const data = require('../data/zoo_data');

const { species } = data;

const animalMapWithoutResidents = () =>
  species.reduce((acc, curr) => {
    acc[curr.location] = species
      .filter((animals) => animals.location === curr.location)
      .map((animal) => animal.name);
    return acc;
  }, {});

const addResidents = (animals, { includeNames, sex }) => {
  const obj = {};
  if (includeNames) {
    obj[animals.name] = animals.residents.map((resident) => resident.name);
  }
  if (sex) {
    obj[animals.name] = animals.residents
      .filter((resident) => resident.sex === sex)
      .map((animal) => animal.name);
  }
  return obj;
};

const getAnimals = (options) =>
  species.reduce((acc, curr) => {
    acc[curr.location] = species
      .filter((animals) => animals.location === curr.location)
      .map((animal) => addResidents(animal, options));
    return acc;
  }, {});

const sort = (animals, { includeNames, sex }) => {
  const obj = {};
  if (includeNames) {
    obj[animals.name] = animals.residents.map((resident) => resident.name).sort();
  }
  if (sex) {
    obj[animals.name] = animals.residents
      .filter((resident) => resident.sex === sex)
      .map((animal) => animal.name)
      .sort();
  }
  return obj;
};

const sortedAnimals = (options) =>
  species.reduce((acc, curr) => {
    acc[curr.location] = species
      .filter((animals) => animals.location === curr.location)
      .map((animal) => sort(animal, options));
    return acc;
  }, {});

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return animalMapWithoutResidents();
  }
  if (options.includeNames && !options.sorted) {
    return getAnimals(options);
  }
  return sortedAnimals(options);
}

module.exports = getAnimalMap;
