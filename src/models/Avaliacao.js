const { Model, DataTypes } = require('sequelize');

class Avaliacao extends Model {
  static init(sequelize) {
    super.init({
      nome_usuario: DataTypes.STRING,
      nota: DataTypes.FLOAT,
      comentario: DataTypes.STRING,
    }, {
      sequelize
    });
  }

  static associate(models) {
    this.belongsTo(models.Local, {
      foreignKey: 'id_local',
      as: 'local'
    });
  }
}

module.exports = Avaliacao;