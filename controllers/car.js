const carService = require('../services/car');
const ResourceNotFound = require('../errors/resourceNotFound');

const list = async () => {
  const cars = await carService.list();
  if(cars.length === 0) throw new ResourceNotFound('No Cars Found');
  return cars;
};

module.exports = {
  list,
};
