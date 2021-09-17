const { Model, DataTypes } = require('sequelize');

class Local extends Model {
  static init(sequelize) {
    super.init({
      local: DataTypes.STRING,
      nome_local: DataTypes.STRING,
      foto: DataTypes.STRING,
      lat: DataTypes.STRING,
      lon: DataTypes.STRING,
      descricao: DataTypes.STRING,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Cidade, {
      foreignKey: 'id_cidade',
      as: 'cidade'
    });

    this.hasMany(models.Avaliacao, {
      foreignKey: 'id_local',
      as: 'avaliacoes'
    });
  }
}

module.exports = Local;