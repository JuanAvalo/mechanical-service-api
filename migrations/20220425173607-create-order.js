'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      carId: {
        type: Sequelize.INTEGER,
        references:{model: 'Cars', key: 'id'},
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      ownerId: {
        type: Sequelize.INTEGER,
        references:{model: 'Owners', key: 'id'},
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE'
      },
      deletedAt: Sequelize.DATE,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};