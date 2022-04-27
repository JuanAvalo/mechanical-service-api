const db = require('../models');

const list = async () => {
  const cars = await db.Cars.findAll({
    attributes: {exclude:['deletedAt']}
  });
  return cars;
};

const create = async (brand, model, year, plate, color) => {
  const [car, wasCreated] = await db.Cars.findOrCreate({
    where:{plate: plate},
    defaults:{
      brand,
      model,
      year,
      color
    }    
  })
  return {car, wasCreated};
}

module.exports = {
  list,
  create
};
