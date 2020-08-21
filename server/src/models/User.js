const { DataTypes, Model } = require('sequelize');

class User extends Model {
  static init(sequelize) {
    return super.init({
      admin: DataTypes.BOOLEAN,
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING
    }, {
      sequelize,
      tableName: 'user'
    });
  }
}

module.exports = User;
