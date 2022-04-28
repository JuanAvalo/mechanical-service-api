const orderService = require('../services/order');

const create = async (ownerId, carId, servicesId) => {
    const newOrder = await orderService.create(ownerId, carId, servicesId);
    return newOrder;
}

module.exports = {
    create
}