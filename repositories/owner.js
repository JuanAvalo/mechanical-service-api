const db = require('../models');

const create = async (firstName, lastName, personalId) => {    
    const [owner, created ] = await db.Owners.findOrCreate({ 
        where: { personalId: personalId },
        defaults:{
            firstName,
            lastName
        }
    })
    return [owner, created];
}

module.exports = {
    create
}