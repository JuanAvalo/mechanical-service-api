const ownerRepository = require('../repositories/owner');
const ResourceAlreadyExists = require('../errors/resourceAlreadyExists');

const create = async (firstName, lastName, personalId) => {
    const newOwner = await ownerRepository.create(firstName, lastName, personalId);
    if(!newOwner.wasCreated) throw new ResourceAlreadyExists(`Owner with PID ${personalId} already exists`);
    return newOwner;
}

module.exports = {
    create
}