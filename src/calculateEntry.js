const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acc, cur) => {
    if (cur.age < 18) acc.child += 1;
    if (cur.age >= 18 && cur.age < 50) acc.adult += 1;
    if (cur.age >= 50) acc.senior += 1;
    return acc;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || !entrants.length) {
    return 0;
  }
  const { child, adult, senior } = countEntrants(entrants);
  return (child * 20.99) + (adult * 49.99) + (senior * 24.99);
}

module.exports = { calculateEntry, countEntrants };
