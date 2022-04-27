const db = require('../models');

const create = async (firstName, lastName, personalId) => {    
    const [owner, wasCreated ] = await db.Owners.findOrCreate({ 
        where: { personalId: personalId },
        defaults:{
            firstName,
            lastName
        }
    })
    return {owner, wasCreated};
}

module.exports = {
    create
}