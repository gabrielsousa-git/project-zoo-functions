const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const days = Object.keys(hours);

const checkAnimal = (animal) => {
  const findAnimal = species.find(({ name }) => name === animal);
  return findAnimal !== undefined;
};

const checkDay = (day) => {
  const findDay = days.find((key) => key === day);
  return findDay !== undefined;
};

const daySchedule = (day) => {
  const animalExhibition = species.filter(({ availability }) => availability.includes(day));
  if (day === 'Monday') {
    return {
      [day]: {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      },
    };
  }
  return {
    [day]: {
      officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
      exhibition: animalExhibition.map(({ name }) => name),
    },
  };
};

const animalSchedule = (animal) => {
  const animalFinder = species.find((specie) => specie.name === animal);
  return animalFinder.availability;
};

const completeSchedule = () => {
  const animalDays = days.map((day) => {
    const animalDisponibility = species.filter(({ availability }) => availability.includes(day));
    if (day === 'Monday') {
      return {
        [day]: {
          officeHour: 'CLOSED',
          exhibition: 'The zoo will be closed!',
        },
      };
    }
    return {
      [day]: {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: animalDisponibility.map(({ name }) => name),
      },
    };
  });
  return animalDays.reduce((acc, cur) => ({ ...acc, ...cur }), {});
};

function getSchedule(scheduleTarget) {
  if (checkAnimal(scheduleTarget)) {
    return animalSchedule(scheduleTarget);
  }
  if (checkDay(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  return completeSchedule();
}
console.log(getSchedule('Sunday'));
module.exports = getSchedule;
