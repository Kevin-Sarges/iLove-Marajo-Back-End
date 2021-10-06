import { Model, DataTypes } from "sequelize";

class Local extends Model {
  static init(sequelize) {
    super.init(
      {
        local: DataTypes.STRING(50),
        nome_local: DataTypes.STRING(50),
        foto: DataTypes.STRING(500),
        lat: DataTypes.STRING(100),
        lon: DataTypes.STRING(100),
        descricao: DataTypes.STRING(500),
      },
      {
        sequelize,
        tableName: "locais",
      }
    );
  }

  static associate(models) {
    this.belongsTo(models.Cidade, {
      foreignKey: "id_cidade",
      as: "cidade",
    });

    this.hasMany(models.Avaliacao, {
      foreignKey: "id_local",
      as: "avaliacoes",
    });
  }
}

export { Local };
