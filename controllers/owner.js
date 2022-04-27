const ownerService = require('../services/owner');

const create = async (firstName, lastName, personalId) => {
    const newOwner = await ownerService.create(firstName, lastName, personalId);
    return newOwner.owner;
}

module.exports = {
    create
}