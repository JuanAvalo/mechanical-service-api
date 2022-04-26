const db = require('../models');

const create = async (name, price) => {
  const newService = await db.Service.create({
    name,
    price
  });
  return newService;
};

module.exports = {
  create,
};
