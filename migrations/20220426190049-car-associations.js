'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.addColumn(
      'Cars',
      'ownerId',
      {
        type: Sequelize.INTEGER,
        references:{model: 'Owners', key: 'id'},
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      }
    )     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn(
      'Cars',
      'ownerId'
    )
  }
};
