'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Owners', [{
      firstName: 'Luis',
      lastName: 'Gomez',
      personalId: 1112223,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      firstName: 'Martin',
      lastName: 'Gutierrez',
      personalId: 23654765,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      firstName: 'Juan',
      lastName: 'Perez',
      personalId: 76456345,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },]
    )
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Owners', null, {});
  }
};
