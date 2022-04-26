const serviceService = require('../services/service');

const create = async (name, price) => {
    const newService = serviceService.create(name, price);
    return newService;
}

module.exports = {
    create
}