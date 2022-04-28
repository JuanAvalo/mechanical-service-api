const carRepository = require('../repositories/car');
const ResourceAlreadyExists = require('../errors/resourceAlreadyExists');
const ResourceNotFound = require('../errors/resourceNotFound');


const list = () => {
  const cars = carRepository.list();
  return cars;
};

const find = async (id) => {
  const car = await carRepository.find(id);
  if(!car) throw new ResourceNotFound('Car Not Found');
  return car;
}

const create = async (ownerId, brand, model, year, plate, color) => {
  const newCar = await carRepository.create(ownerId, brand, model, year, plate, color);
  if(!newCar.wasCreated) throw new ResourceAlreadyExists(`Car with plate ${plate} already exists`);
  return newCar.car;
}

const patch = async (id, newData) => {
  const wasUpdated = await carRepository.patch(id, newData);
  if(wasUpdated.length === 0) throw new ResourceNotFound('Car Not Found');
  return `Car id ${id} modified: ${Object.keys(newData)} to ${Object.values(newData)}`;
}

const record =  (id) => {
  const record = carRepository.record(id);
  return record; 
}

const destroy = async (id) => {
  const wasDestroyed = await carRepository.destroy(id);
  if(!wasDestroyed) throw new ResourceNotFound('Car Not Found');
  return `Car with id ${id} was deleted`;
}
module.exports = {
  list,
  find,
  create,
  patch,
  record,
  destroy,  
};
