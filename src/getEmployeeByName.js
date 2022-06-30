const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  return employees.find((e) => e.firstName === employeeName || e.lastName === employeeName);
}
console.log(getEmployeeByName());
module.exports = getEmployeeByName;
