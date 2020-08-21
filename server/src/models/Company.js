const { DataTypes, Model, Op } = require('sequelize');
const moment = require('moment');

class Company extends Model {
  static init(sequelize) {
    return super.init({
      name: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'company'
    });
  }
}

module.exports = Company;
