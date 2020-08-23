const { DataTypes, Model } = require('sequelize');

class ProjectSkill extends Model {
  static init(sequelize) {
    return super.init({
      stars: DataTypes.INTEGER,
      company: DataTypes.INTEGER,
      project: {
        type: DataTypes.INTEGER,
        unique: {
          msg: 'Não é possível adicionar duas competências iguais para o mesmo projeto'
        }
      },
      skill: {
        type: DataTypes.INTEGER,
        unique: {
          msg: 'Não é possível adicionar duas competências iguais para o mesmo projeto'
        }
      }
    }, {
      sequelize,
      tableName: 'projectskill',
      indexes: [
        {
          unique: true,
          fields: ['project', 'skill']
        }
      ]
    });
  }

  static associate(models) {
    this.belongsTo(models.Company, {
      foreignKey: { allowNull: false, name: 'company' }
    });

    this.belongsTo(models.Project, {
      foreignKey: { allowNull: false, name: 'project' }
    });

    this.belongsTo(models.Skill, {
      foreignKey: { allowNull: false, name: 'skill' }
    });
  }
}

module.exports = ProjectSkill;
