'use strict';

const hash = require('../config/encrypt');
const uuid = require('../config/generateUUID');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: uuid(),
      login: 'adminuser',
      nome: 'admin user',
      senha: await hash('adminadmin'),
      admin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};