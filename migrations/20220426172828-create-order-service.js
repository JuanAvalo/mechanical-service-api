'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('order_services', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderId: {
        type: Sequelize.INTEGER,
        references:{ model: 'Orders', key: 'id'},
        onDelete:'CASCADE',
        onUpdate: 'CASCADE'
      },
      serviceId: {
        type: Sequelize.INTEGER,
        references:{model: 'Services', key: 'id'},
        onDelete: 'CASCADE',
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
    await queryInterface.dropTable('order_services');
  }
};