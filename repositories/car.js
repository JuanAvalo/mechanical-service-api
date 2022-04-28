const db = require('../models');
const ResourceNotFound = require('../errors/resourceNotFound');

const list = async () => {
  const cars = await db.Cars.findAll({
    attributes: {exclude:['deletedAt', 'ownerId']},
    include:[{
      model: db.Owners,
      as: 'Owner',
      attributes: {exclude: ['deletedAt']}
    }]
  });
  return cars;
};

const find = async (id) =>  {
  const car = db.Cars.findByPk(
    id,
    {
      include:[{
        model: db.Owners,
        attributes: {exclude: ['deletedAt']}
      }],
      attributes: {exclude: ['deletedAt', 'OwnerId']}
    }
  );
  return car;
}

const create = async (ownerId, brand, model, year, plate, color) => {
  const owner = await db.Owners.findByPk(ownerId);
  if(!owner) throw new ResourceNotFound('Owner Not Found');

  const [car, wasCreated] = await db.Cars.findOrCreate({
    where:{plate: plate},
    defaults:{
      ownerId,
      brand,
      model,
      year,
      color
    }    
  })
  return {car, wasCreated};
}

const patch = async (id, newData) => {
  if(newData.ownerId) {
    const newOwner = await db.Owners.findByPk(newData.ownerId);
    if(!newOwner) throw new ResourceNotFound('New Owner Not Found');
  }
  const wasUpdated = await db.Cars.update(
    newData,
    {where:{id: id}}
  )
  return wasUpdated;
}

const record = async (id) => {
  try{
    const record = await db.Cars.findByPk(
      id,
      {
        attributes:{exclude:['deletedAt','createdAt','updatedAt','OwnerId']},
        include:[{
          model: db.Order,
          attributes:['id','createdAt'],
          include:[{
            model: db.Service,
            attributes:['name'],
            group:['id'],
            through:{
              attributes:[]
            }
          }],
        }]
      }
    )
    return record;

  }
  catch(err) {console.log(err)}
  
}

const destroy = async (id) => {
  const wasDeleted = await db.Cars.destroy({where: { id: id }});
  console.log(wasDeleted)
  return wasDeleted;
}

module.exports = {
  list,
  find,
  create,
  destroy,
  record,
  patch
};
