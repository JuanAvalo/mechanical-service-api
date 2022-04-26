const db = require('../models');
const Cars = db.Cars;

const list = async () => {
  const cars = await Cars.findAll({
    attributes: {exclude:['deletedAt']}
  });
  return cars;
};

module.exports = {
  list,
};
