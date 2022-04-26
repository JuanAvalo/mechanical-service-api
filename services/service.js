const serviceRepository = require('../repositories/service');

const create = (name, price) => {
    return serviceRepository.create(name, price)
}

module.exports = {
    create
}