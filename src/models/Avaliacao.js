import { Model, DataTypes } from "sequelize";

class Avaliacao extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_usuario: DataTypes.STRING(50),
        nota: DataTypes.FLOAT,
        comentario: DataTypes.STRING(500),
      },
      {
        sequelize,
        tableName: "avaliacoes",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Local, {
      foreignKey: "id_local",
      as: "local",
    });
  }
}

export { Avaliacao };
