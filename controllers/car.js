const carService = require('../services/car');
const ResourceNotFound = require('../errors/resourceNotFound');

const list = async () => {
  const cars = await carService.list();
  if(cars.length === 0) throw new ResourceNotFound('No Cars Found');
  return cars;
};

const find = async (id) => {
  const car = await carService.find(id);
  return car;
}

const create = async (ownerId, brand, model, year, plate, color) => {
    const newCar = await carService.create(ownerId, brand, model, year, plate, color);
    return newCar;
}

const patch = async (id, ownerId, brand, model, year, plate, color) => {  
  const newData = {
    ownerId: ownerId,
    brand: brand,
    model: model,
    year:year,
    plate:plate,
    color:color
  }
  Object.keys(newData).forEach(key => {
    if(!newData[key]) {delete newData[key]}
  })

  const updateCar = await carService.patch(id, newData);
  return updateCar;
}

const record = async (id) => {
  const record = await carService.record(id);
  if(!record) throw new ResourceNotFound('Car Not Found')
  return record;
}

const destroy = async (id) => {
  const wasDestroyed = await carService.destroy(id);
  return wasDestroyed;
}
module.exports = {
  list,
  find,
  create,
  destroy,
  record,
  patch
};
