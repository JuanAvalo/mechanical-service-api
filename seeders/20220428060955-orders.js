'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [{
      carId: 1,
      ownerId: 1,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      carId: 2,
      ownerId: 1,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      carId: 2,
      ownerId: 1,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      carId: 2,
      ownerId: 1,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      carId: 4,
      ownerId: 2,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },
    {
      carId: 5,
      ownerId: 3,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
    },]
    )

    await await queryInterface.bulkInsert('order_services', [
      {
      orderId: 1,
      serviceId: 1,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      
      },
      {
      orderId: 1,
      serviceId: 3,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 1,
      serviceId: 6,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 2,
      serviceId: 2,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 2,
      serviceId: 5,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 3,
      serviceId: 4,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 4,
      serviceId: 4,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 4,
      serviceId: 2,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 5,
      serviceId: 1,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 6,
      serviceId: 6,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
      {
      orderId: 6,
      serviceId: 4,
      createdAt: new Date,
      updatedAt: new Date,
      deletedAt: null,
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('order_services', null, {});
    await queryInterface.bulkDelete('Orders', null, {});

  }
};
