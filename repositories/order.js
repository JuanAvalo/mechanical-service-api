const db = require('../models');
const { Op } = require('sequelize');
const ResourceNotFound = require('../errors/resourceNotFound');
const { sequelize } = require('../models');

const create = async (ownerId, carId, servicesId) => {
    const trans = await sequelize.transaction();

    const owner = await db.Owners.findByPk(ownerId)
    if(!owner) throw new ResourceNotFound('Owner does NOT exists');
    
    const services = await db.Service.findAll({where: {id:{ [Op.in] : servicesId }} })
    if(!services || services.length !== servicesId.length) throw new ResourceNotFound('Service does NOT exists');
    
    try{
        const newOrder = await db.Order.create({
            ownerId,
            carId
        },{ transaction: trans });
        await newOrder.addServices(services,{transaction: trans});
        await trans.commit();

        return ({newOrder, services})
    }
    catch(err) { 
        await trans.rollback()
        throw new Error(err)
    }
}

module.exports = {
    create
}