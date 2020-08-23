const { DataTypes, Model } = require('sequelize');

class EmployeeSkill extends Model {
  static init(sequelize) {
    return super.init({
      stars: DataTypes.INTEGER,
      company: DataTypes.INTEGER,
      employee: {
        type: DataTypes.INTEGER,
        unique: {
          msg: 'Não é possível adicionar duas competências iguais para o mesmo colaborador'
        }
      },
      skill: {
        type: DataTypes.INTEGER,
        unique: {
          msg: 'Não é possível adicionar duas competências iguais para o mesmo colaborador'
        }
      }
    }, {
      sequelize,
      tableName: 'employeeskill',
      indexes: [
        {
          unique: true,
          fields: ['employee', 'skill']
        }
      ]
    });
  }

  static associate(models) {
    this.belongsTo(models.Company, {
      foreignKey: { allowNull: false, name: 'company' }
    });

    this.belongsTo(models.Employee, {
      foreignKey: { allowNull: false, name: 'employee' }
    });

    this.belongsTo(models.Skill, {
      foreignKey: { allowNull: false, name: 'skill' }
    });
  }
}

module.exports = EmployeeSkill;
