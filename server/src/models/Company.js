const { DataTypes, Model, Op } = require('sequelize');
const moment = require('moment');

class Company extends Model {
  static init(sequelize) {
    return super.init({
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: { msg: 'É necessário informar um nome' },
        }
      },
    }, {
      sequelize,
      tableName: 'company'
    });
  }
}

module.exports = Company;
