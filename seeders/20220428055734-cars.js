'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.removeConstraint('Cars','Cars_ownerId_foreign_idx',{}).then(()=>{
      return queryInterface.bulkInsert('Cars', [{
        ownerId: 1,
        brand: 'Ford',
        model: 'Fiesta',
        year: 2012,
        plate: 'AA123AA',
        color:'ROJO',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null,
      },
      {
        ownerId: 1,
        brand: 'Nissan',
        model: 'Sentra',
        year: 2018,
        plate: 'AA444CC',
        color:'NEGRO',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null,
      },
      {
        ownerId: 2,
        brand: 'Ford',
        model: 'F100',
        year: 2010,
        plate: 'AAA123',
        color:'GRIS',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null,
      },{
        ownerId: 2,
        brand: 'Chevrolet',
        model: 'Corsa',
        year: 2008,
        plate: 'ZZZ123',
        color:'BLANCO',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null,
      },{
        ownerId: 3,
        brand: 'Fiat',
        model: 'Palio',
        year: 2017,
        plate: 'AAA222',
        color:'GRIS',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null,
      },{
        ownerId: 3,
        brand: 'Ford',
        model: 'Ranger',
        year: 2013,
        plate: 'GGG444',
        color:'GRIS',
        createdAt: new Date,
        updatedAt: new Date,
        deletedAt: null,
      }],{}
      )
      .then(()=>{
        return queryInterface.addConstraint('Cars',{
          fields:['ownerId'],
          type: 'FOREIGN KEY',
          name: 'Cars_ownerId_foreign_idx',
          references:{
            table: 'Owners',
            field: 'id'
          },
          onDelete: 'SET NULL',
          onUpdate: 'CASCADE'
        })
      })
    })
    
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Cars', null, {});
  }
};
