const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((manager) => manager.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    // return employees.filter((employee) => employee.managers.includes(managerId));
    const emp = employees.filter((employee) => employee.managers.includes(managerId));
    const emp1 = `${emp[0].firstName} ${emp[0].lastName}`;
    const emp2 = `${emp[1].firstName} ${emp[1].lastName}`;
    const emp3 = `${emp[2].firstName} ${emp[2].lastName}`;
    // return `[ ${employ[0].firstName} ${employ[0].lastName}]`;
    return [emp1, emp2, emp3];
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
