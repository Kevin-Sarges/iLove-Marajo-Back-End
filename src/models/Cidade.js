import { Model, DataTypes } from 'sequelize';

class Cidade extends Model {
  static init(sequelize) {
    super.init({
      nome_cidade: DataTypes.STRING(50)
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

export { Cidade };