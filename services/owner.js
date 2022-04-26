const ownerRepository = require('../repositories/owner');

const create = (firstName, lastName, personalId) => {
    return ownerRepository.create(firstName, lastName, personalId)
}

module.exports = {
    create
}