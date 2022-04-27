const carService = require('../services/car');
const ResourceNotFound = require('../errors/resourceNotFound');

const list = async () => {
  const cars = await carService.list();
  if(cars.length === 0) throw new ResourceNotFound('No Cars Found');
  return cars;
};

const create = async (brand, model, year, plate, color) => {
    const newCar = await carService.create(brand, model, year, plate, color);
    return newCar;
}

module.exports = {
  list,
  create
};
