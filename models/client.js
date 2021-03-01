'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Client.init({
    cpfOrCnpj: DataTypes.STRING,
    typePerson: DataTypes.CHAR,
    nome: DataTypes.STRING,
    username: DataTypes.STRING,
    address: DataTypes.STRING,
    numAddress: DataTypes.NUMBER,
    district: DataTypes.STRING,
    uf: DataTypes.STRING,
    complement: DataTypes.STRING,
    idDistrict: DataTypes.UUID,
    tel: DataTypes.NUMBER,
    email: DataTypes.STRING,
    site: DataTypes.STRING,
    phone: DataTypes.NUMBER,
    idUser: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Client',
  });
  return Client;
};