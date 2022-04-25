const carRepository = require('../repositories/car');

const list = () => {
  const cars = carRepository.list();
  return cars;
};

module.exports = {
  list,
};
