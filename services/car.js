const carRepository = require('../repositories/car');
const ResourceAlreadyExists = require('../errors/resourceAlreadyExists');

const list = () => {
  const cars = carRepository.list();
  return cars;
};

const create = async (brand, model, year, plate, color) => {
  const newCar = await carRepository.create(brand, model, year, plate, color);
  if(!newCar.wasCreated) throw new ResourceAlreadyExists(`Car with plate ${plate} already exists`);
  return newCar.car;
}

module.exports = {
  list,
  create
};
