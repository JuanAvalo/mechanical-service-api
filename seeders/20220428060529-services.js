'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Services', [{
      name: 'Cambio de Aceite',
      price: 500,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      name: 'Cambio de Filtro',
      price: 2400,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      name: 'Cambio de Correa',
      price: 25700,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      name: 'Revision General',
      price: 450,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },{
      name: 'Pintura',
      price: 14250,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },{
      name: 'Otro',
      price: 1000,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Services', null, {});
  }
};
