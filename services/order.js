const orderRepository = require('../repositories/order');

const create = (ownerId, carId, servicesId) => {
    return orderRepository.create(ownerId, carId, servicesId);
}

module.exports = {
    create
}