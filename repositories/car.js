const db = require('../models');

const list = async () => {
  const cars = await db.Cars.findAll({
    attributes: {exclude:['deletedAt']}
  });
  return cars;
};

module.exports = {
  list,
};
