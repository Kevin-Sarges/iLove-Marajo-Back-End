const { Model, DataTypes } = require('sequelize');

class Cidade extends Model {
  static init(sequelize) {
    super.init({
      nome_cidade: DataTypes.STRING
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.hasMany(models.Local, {
      foreignKey: 'id_cidade',
      as: 'local'
    })
  }
}

module.exports = Cidade;