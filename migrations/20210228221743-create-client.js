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
        type: Sequelize.CHAR      // MANDATORY
      },
      nome: {
        allowNull: true,
        type: Sequelize.STRING
      },
      username: {
        allowNull: true,
        type: Sequelize.STRING
      },
      address: {
        allowNull: true,
        type: Sequelize.STRING
      },
      numAddress: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      district: {
        allowNull: true,
        type: Sequelize.STRING
      },
      complement: {
        allowNull: true,
        type: Sequelize.STRING
      },
      idDistrict: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      tel: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      site: {
        allowNull: true,
        type: Sequelize.STRING
      },
      phone: {
        allowNull: true,
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