'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clients', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultVallue: Sequelize.UUIDV4
      },
      cpfOrCnpj: {
        allowNull: false,
        type: Sequelize.STRING    // MANDATORY
      },
      typePerson: {
        allowNull: false,
        type: Sequelize.STRING      // MANDATORY
      },
      nome: {
        allowNull: false,
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      numAddress: {
        type: Sequelize.INTEGER
      },
      district: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      complement: {
        type: Sequelize.STRING
      },
      idDistrict: {
        allowNull: false,
        type: Sequelize.UUID
      },
      tel: {
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      site: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.INTEGER
      },
      idUser: {
        allowNull: false,
        type: Sequelize.UUID
      },
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clients');
  }
};