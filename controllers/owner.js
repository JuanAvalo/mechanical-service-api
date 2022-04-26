const ownerService = require('../services/owner');
const ResourceAlreadyExists = require('../errors/resourceAlreadyExists');

const create = async (firstName, lastName, personalId) => {
    const newOwner = await ownerService.create(firstName, lastName, personalId);
    const ownerAlreadyExists = !newOwner[1];
    if(ownerAlreadyExists) throw new ResourceAlreadyExists('Owner Already Exists')     
    return newOwner[0];
}

module.exports = {
    create
}